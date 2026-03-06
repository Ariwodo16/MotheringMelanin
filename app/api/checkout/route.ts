import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const PACKAGE_PRICES: Record<string, number> = {
  "blessed-beginnings":  175000,  // in cents
  "faithful-foundations": 150000,
  "grace-renewal":        135000,
};

const PACKAGE_NAMES: Record<string, string> = {
  "blessed-beginnings":  "Blessed Beginnings",
  "faithful-foundations": "Faithful Foundations",
  "grace-renewal":        "Grace Renewal",
};

export async function POST(req: NextRequest) {
  try {
    const { packageId, paymentType, customerEmail, customerName } = await req.json();

    const totalCents = PACKAGE_PRICES[packageId];
    const packageName = PACKAGE_NAMES[packageId];

    if (!totalCents || !packageName) {
      return NextResponse.json({ error: "Invalid package" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    // ── FULL PAYMENT ──────────────────────────────────────────────────────────
    if (paymentType === "full") {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        customer_email: customerEmail,
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: totalCents,
              product_data: {
                name: packageName,
                description: "Mothering Melanin Doula Services",
              },
            },
          },
        ],
        metadata: {
          packageId,
          customerName,
          paymentType: "full",
        },
        success_url: `${baseUrl}/contact?success=true&package=${packageId}`,
        cancel_url:  `${baseUrl}/services`,
      });

      return NextResponse.json({ url: session.url });
    }

    // ── INSTALLMENTS (pay in 4, every 2 weeks) ────────────────────────────────
    if (paymentType === "installments") {
      const installmentCents = Math.ceil(totalCents / 4);

      // Create a recurring price billed every 2 weeks
      // Stripe doesn't natively support "every 2 weeks" as a subscription interval
      // so we use interval: "week", interval_count: 2
      const price = await stripe.prices.create({
        currency: "usd",
        unit_amount: installmentCents,
        recurring: {
          interval: "week",
          interval_count: 2,
        },
        product_data: {
          name: `${packageName} — Installment Plan (4 payments)`,
        },
      });

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer_email: customerEmail,
        line_items: [{ price: price.id, quantity: 1 }],
        subscription_data: {
          metadata: {
            packageId,
            customerName,
            paymentType: "installments",
            totalInstallments: "4",
            // Stripe webhook will read this to cancel after 4 payments
          },
        },
        metadata: {
          packageId,
          customerName,
          paymentType: "installments",
        },
        success_url: `${baseUrl}/contact?success=true&package=${packageId}`,
        cancel_url:  `${baseUrl}/services`,
      });

      return NextResponse.json({ url: session.url });
    }

    return NextResponse.json({ error: "Invalid payment type" }, { status: 400 });

  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}