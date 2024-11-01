import Collections from '@/components/layout/search/collections';
import FilterList from '@/components/layout/search/filter';
import { sorting } from '@/lib/constants';
import { cn } from '@/lib/utils';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        className={cn(
          'content-container mt-12',
          'flex flex-col md:flex-row',
          'gap-8 pb-4',
          'text-black dark:text-white'
        )}
      >
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
    </>
  );
}
