import Link from 'next/link';

import FooterMenu from '@/components/layout/footer/footer-menu';
import LogoSquare from '@/components/ui/logo-square';
import { getMenu } from '@/lib/shopify';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import { ModeToggle } from '../../ui/mode-toggle/new-york';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer({ className }: { className?: string }) {
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}>
      {/* Top section */}
      <div className="border-border-subtle shadow-inner-overlay-md border-y">
        <div
          className={cn(
            'flex flex-col md:flex-row',
            'content-container py-12',
            'h-max w-full gap-6 md:gap-12',
            'text-sm'
          )}
        >
          <div className="flex flex-col items-start justify-between gap-6">
            <Link className="flex items-center gap-2 text-black dark:text-white md:pt-1" href="/">
              <LogoSquare size="sm" />
              <span className="uppercase">{SITE_NAME}</span>
            </Link>
            <ModeToggle className="my-2" />
          </div>
          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>
          <div className="md:ml-auto">
            <a
              className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
              aria-label="Deploy on Vercel"
              href="https://vercel.com/templates/next.js/nextjs-commerce"
            >
              <span className="px-3">▲</span>
              <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
              <span className="px-3">Deploy</span>
            </a>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}

const FooterCopyright = ({ className }: { className?: string }) => {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';
  return (
    <div
      className={cn(
        // 'border-t border-neutral-200 py-6 text-sm dark:border-neutral-700',
        className
      )}
    >
      <div
        className={cn(
          // 'mx-auto w-full max-w-7xl px-4 md:px-4 min-[1320px]:px-0',
          'flex flex-col items-center md:flex-row',
          'gap-1 md:gap-0',
          'content-container py-3'
        )}
      >
        <p>
          &copy; {copyrightDate} {copyrightName}
          {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
        </p>
        <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
        <p>
          <a
            href="https://github.com/mohmdev/shopify-nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the source
          </a>
        </p>
        <div className="flex flex-row items-end md:ml-auto">
          <a
            href="https://nexweb.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white"
          >
            Created by Nexweb Studio
          </a>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white"
          >
            Powered by ▲ Vercel
          </a>
        </div>
      </div>
    </div>
  );
};
