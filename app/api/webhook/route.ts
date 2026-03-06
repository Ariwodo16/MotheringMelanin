import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

function getSubscriptionId(invoice: Stripe.Invoice): string | null {
  // 2026-02-25.clover API uses invoice.parent instead of invoice.subscription
  const parent = (invoice as any).parent;
  if (parent?.type === "subscription_details") {
    return parent.subscription_details?.subscription ?? null;
  }
  // fallback for older shapes
  return (invoice as any).subscription ?? null;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig  = req.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // ── Successful payment ────────────────────────────────────────────────────
  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;
    const subscriptionId = getSubscriptionId(invoice);

    if (!subscriptionId) return NextResponse.json({ received: true });

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const meta = subscription.metadata;

    if (meta.paymentType !== "installments") return NextResponse.json({ received: true });

    const totalInstallments = parseInt(meta.totalInstallments ?? "4", 10);

    const invoices = await stripe.invoices.list({
      subscription: subscriptionId,
      status: "paid",
    });

    const paidCount = invoices.data.length;

    console.log(`Installment ${paidCount}/${totalInstallments} paid for subscription ${subscriptionId}`);

    if (paidCount >= totalInstallments) {
      await stripe.subscriptions.cancel(subscriptionId);
      console.log(`Subscription ${subscriptionId} cancelled after ${totalInstallments} payments.`);
    }
  }

  // ── Failed payment ────────────────────────────────────────────────────────
  if (event.type === "invoice.payment_failed") {
    const invoice = event.data.object as Stripe.Invoice;
    const subscriptionId = getSubscriptionId(invoice);

    if (subscriptionId) {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      if (subscription.metadata.paymentType === "installments") {
        console.warn(`Installment payment failed for subscription ${subscriptionId}`);
      }
    }
  }

  return NextResponse.json({ received: true });
}