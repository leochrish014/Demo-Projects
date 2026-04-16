import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/lib/products';

const stripeKey = process.env.STRIPE_SECRET_KEY;

export async function POST(req: Request) {
  if (!stripeKey) {
    return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY' }, { status: 500 });
  }

  const stripe = new Stripe(stripeKey);
  const { productId } = await req.json();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 });
  }

  const price = process.env[product.stripePriceIdEnv];

  if (!price) {
    return NextResponse.json({ error: `Missing env var: ${product.stripePriceIdEnv}` }, { status: 500 });
  }

  const origin = req.headers.get('origin') || 'http://localhost:3000';
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price, quantity: 1 }],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/?canceled=true`
  });

  return NextResponse.json({ sessionId: session.id });
}
