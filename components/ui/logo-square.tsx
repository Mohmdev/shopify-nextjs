import { cn } from '@/lib/utils';
import AcmeLogo from './icons/acme';

export default function LogoSquare({
  size,
  className
}: {
  size?: 'sm' | undefined;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        },
        className
      )}
    >
      <AcmeLogo
        className={cn({
          'h-[16px] w-[16px]': !size,
          'h-[10px] w-[10px]': size === 'sm'
        })}
      />
    </div>
  );
}
