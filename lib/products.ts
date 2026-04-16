export type Product = {
  id: string;
  name: string;
  tagline: string;
  priceCents: number;
  image: string;
  stripePriceIdEnv: string;
};

export const products: Product[] = [
  {
    id: 'smart-glasses-x1',
    name: 'Smart Glasses X1',
    tagline: 'Lightweight AR glasses for all-day wear.',
    priceCents: 29900,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80',
    stripePriceIdEnv: 'STRIPE_PRICE_SMART_GLASSES_X1'
  },
  {
    id: 'holo-watch-pro',
    name: 'Holo Watch Pro',
    tagline: 'Adaptive AI assistant on your wrist.',
    priceCents: 19900,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80',
    stripePriceIdEnv: 'STRIPE_PRICE_HOLO_WATCH_PRO'
  },
  {
    id: 'audiopod-max',
    name: 'AudioPod Max',
    tagline: 'Spatial audio with active AI noise suppression.',
    priceCents: 14900,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=80',
    stripePriceIdEnv: 'STRIPE_PRICE_AUDIOPOD_MAX'
  }
];

export const formatUsd = (amountCents: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amountCents / 100);
