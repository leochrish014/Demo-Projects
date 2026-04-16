import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SampleAIStore',
  description: 'AI-first e-commerce product showcase with 3D + AR + Stripe checkout.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
