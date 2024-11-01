import { CartProvider } from '@/components/cart/cart-context';
import Footer from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { WelcomeToast } from '@/components/ui/welcome-toast';
import { getCart } from '@/lib/shopify';
import { cn, ensureStartsWith } from '@/lib/utils';
import { GeistSans } from 'geist/font/sans';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import 'styles/custom.css';
import 'styles/globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  return (
    <html
      lang="en"
      data-mode="light"
      className={GeistSans.variable}
      suppressHydrationWarning={true}
    >
      <body
        className={cn(
          'bg-neutral-50 selection:bg-teal-300 dark:bg-neutral-900 dark:selection:bg-pink-500',
          'text-black dark:text-white dark:selection:text-white'
        )}
      >
        <CartProvider cartPromise={cart}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster closeButton />
            <WelcomeToast />
            <Footer className="mt-12" />
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
