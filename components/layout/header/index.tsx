import CartModal from '@/components/cart/modal';
import LogoSquare from '@/components/ui/logo-square';
import { getMenu } from '@/lib/shopify';
import { Menu } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';

const { SITE_NAME } = process.env;

export async function Header({ className }: { className?: string }) {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <header
      className={cn(
        'relative flex items-center justify-between p-4 lg:px-6',
        'group sticky inset-x-0 top-0 z-50',
        'mx-auto h-16 w-full duration-200',
        'border-b border-border bg-background',
        className
      )}
    >
      <nav className="content-container relative">
        {/* Mobile */}
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        {/* Desktop */}
        <div className="flex w-full items-center">
          {/* Left */}
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              prefetch={true}
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare className="aspect-square h-full w-max rounded-md p-1.5" />
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </div>
            </Link>
          </div>
          {/* Center */}
          <div className="hidden justify-center md:flex md:w-1/3">
            {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      prefetch={true}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {/* Right */}
          <div className="flex items-center justify-end gap-4 md:w-1/3">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
            <CartModal />
          </div>
        </div>
      </nav>
    </header>
  );
}
