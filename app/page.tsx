import { ThreeItemGrid } from '@/components/grid/three-items';
import { Carousel } from '@/components/ui/carousel';
import Hero from '@/components/ui/hero';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeItemGrid className="content-container py-12 lg:py-16" />
      <Carousel />
    </>
  );
}
