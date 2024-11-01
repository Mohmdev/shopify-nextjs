import { cn } from '@/lib/utils';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div
      className={cn(
        'relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white',
        className
      )}
    >
      <ShoppingCartIcon className="h-4 transition-all ease-in-out hover:scale-110" />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-3.5 w-3.5 rounded bg-blue-600 text-[0.625rem] font-[300] leading-[revert] text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
