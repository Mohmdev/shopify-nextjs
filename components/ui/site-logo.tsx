import { cn } from '@/lib/utils';
import Link from 'next/link';
import AcmeLogo from './icons/acme';

const SiteLogo = ({
  text,
  className,
  textClassName,
  svgComponent
}: {
  text?: string;
  className?: string;
  textClassName?: string;
  svgComponent?: React.ReactNode;
}) => {
  const renderSvg = () => {
    if (svgComponent) {
      return (
        <>
          <Link className="group-hover:*:fill-[var(--fg-muted)]" href="/">
            {svgComponent}
          </Link>
        </>
      );
    }

    return <AcmeLogo fill="#9ca3af" className="fill-black dark:fill-white" />;
  };

  return (
    <div
      data-testid="nav-store-link"
      className={cn(
        'group *:transition-colors *:duration-200 *:ease-linear',
        'flex max-w-max flex-row items-center justify-center gap-1.5',
        className
      )}
    >
      {renderSvg()}

      <Link
        href="/"
        className={cn(
          'txt-compact-xlarge-plus text-secondary-foreground flex h-full items-center uppercase',
          'group-hover:text-ui-fg-muted',
          textClassName
        )}
      >
        {text}
      </Link>
    </div>
  );
};

export default SiteLogo;
