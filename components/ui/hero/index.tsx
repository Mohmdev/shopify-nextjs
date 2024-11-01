import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from '../shadcn/button';

const Hero = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'border-border-subtle shadow-inner-overlay-md relative h-[65vh] w-full border-b',
        className
      )}
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-center sm:p-32">
        <span className="flex flex-row items-end gap-1.5">
          <h1 className="text-2xl font-medium leading-10">Storefront UI Template</h1>
          <h2 className="text-xs font-medium leading-8">by Mohmdev</h2>
        </span>

        <span className="mt-8">
          <h2 className="text-lg font-normal leading-10">Powered by Nextjs 15 and Shopify</h2>
        </span>
        <a href="https://github.com/mohmdev/shopify-nextjs" target="_blank">
          <Button variant="default">
            View on GitHub
            <GitHubLogoIcon />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
