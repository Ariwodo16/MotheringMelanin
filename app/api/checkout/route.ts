import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const PRICES: Record<string, { name: string; amount: number }> = {
  "blessed-beginnings":   { name: "Blessed Beginnings",  amount: 175000 },
  "faithful-foundations": { name: "Faithful Foundations", amount: 150000 },
  "grace-renewal":        { name: "Grace Renewal",        amount: 135000 },
};

export async function POST(req: NextRequest) {
  try {
    const { packageId, customerEmail, customerName } = await req.json();

    const pkg = PRICES[packageId];
    if (!pkg) {
      return NextResponse.json({ error: "Invalid package" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
  mode: "payment" as const,
  automatic_payment_methods: { enabled: true },
  customer_email: customerEmail || undefined,
  line_items: [
    {
      quantity: 1,
      price_data: {
        currency: "usd" as const,
        unit_amount: pkg.amount,
        product_data: {
          name: pkg.name,
          description: "Mothering Melanin — Doula Services",
          images: ["https://www.motheringmelanin.com/logos/logo.png"],
        },
      },
    },
  ],
  metadata: {
    packageId,
    customerName: customerName || "",
  },
  success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact?success=true&package=${packageId}`,
  cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact?cancelled=true`,
} as Stripe.Checkout.SessionCreateParams);

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}