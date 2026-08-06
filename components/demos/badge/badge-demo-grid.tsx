import { Children, type ReactNode } from 'react';

import { cn } from '@/lib/cn';

type BadgeDemoGridProps = {
  children: ReactNode;
  className?: string;
};

export function BadgeDemoGrid({ children, className }: BadgeDemoGridProps) {
  const count = Children.count(children);

  return (
    <div
      className={cn(
        count > 5
          ? 'flex w-full max-w-96 flex-wrap items-center justify-center gap-6'
          : 'flex flex-col items-center gap-6',
        className,
      )}
    >
      {children}
    </div>
  );
}
