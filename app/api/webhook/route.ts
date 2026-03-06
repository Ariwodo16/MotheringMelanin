import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

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

  // Listen for successful invoice payments on installment subscriptions
  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;
    const subscriptionId = invoice.subscription as string;

    if (!subscriptionId) return NextResponse.json({ received: true });

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const meta = subscription.metadata;

    // Only handle installment plans
    if (meta.paymentType !== "installments") return NextResponse.json({ received: true });

    const totalInstallments = parseInt(meta.totalInstallments ?? "4", 10);

    // Count how many invoices have been paid for this subscription
    const invoices = await stripe.invoices.list({
      subscription: subscriptionId,
      status: "paid",
    });

    const paidCount = invoices.data.length;

    console.log(`Installment ${paidCount}/${totalInstallments} paid for subscription ${subscriptionId}`);

    // Cancel after all installments are paid
    if (paidCount >= totalInstallments) {
      await stripe.subscriptions.cancel(subscriptionId);
      console.log(`Subscription ${subscriptionId} cancelled after ${totalInstallments} payments.`);
    }
  }

  // Handle failed payment — optional: notify the client
  if (event.type === "invoice.payment_failed") {
    const invoice = event.data.object as Stripe.Invoice;
    const subscriptionId = invoice.subscription as string;

    if (subscriptionId) {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      if (subscription.metadata.paymentType === "installments") {
        // Stripe will automatically retry the charge per your retry settings
        // You can add email notification logic here if needed
        console.warn(`Installment payment failed for subscription ${subscriptionId}`);
      }
    }
  }

  return NextResponse.json({ received: true });
}
