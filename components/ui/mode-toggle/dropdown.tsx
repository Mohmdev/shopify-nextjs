'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { VariantProps } from 'class-variance-authority';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../shadcn/dropdown-menu';

export interface ModeToggleDropdownProps {
  className?: string;
  size?: VariantProps<typeof Button>['size'];
  align?: 'start' | 'end' | 'center';
}

const ModeToggleDropdown = ({
  className,
  size = 'icon',
  align = 'start'
}: ModeToggleDropdownProps) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size={size} className={cn('aspect-square', className)}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="shadow-elevation-card-hover z-[999] bg-card *:bg-inherit"
      >
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggleDropdown;
