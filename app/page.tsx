import Image from 'next/image';
import { ArTryOnButton } from './components/ArTryOnButton';
import { CheckoutButton } from './components/CheckoutButton';
import { ModelViewer } from './components/ModelViewer';
import { formatUsd, products } from '@/lib/products';

export default function Home() {
  return (
    <main>
      <section className="section grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-sky-600">SampleAIStore</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Future-ready devices, sold with immersive shopping.</h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            A production-ready Next.js storefront with 3D product exploration, AR try-on workflows, responsive UX, and Stripe checkout.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ArTryOnButton />
            <a href="#products" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100">
              Explore Products
            </a>
          </div>
        </div>
        <ModelViewer />
      </section>

      <section id="products" className="section pt-0">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image src={product.image} alt={product.name} width={900} height={680} className="h-56 w-full object-cover" />
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-sm text-slate-600">{product.tagline}</p>
                <p className="text-lg font-bold">{formatUsd(product.priceCents)}</p>
                <CheckoutButton productId={product.id} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="rounded-2xl bg-slate-900 p-8 text-white">
          <h2 className="text-2xl font-bold">Deployment Ready</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Set Stripe keys in environment variables, push to GitHub, and deploy to Vercel in minutes. This template is optimized for a fast, AI-assisted launch cycle.
          </p>
        </div>
      </section>
    </main>
  );
}
