'use client';

import { cn } from '@/lib/cn';
import * as Base from 'fumadocs-ui/components/sidebar/base';
import type { ComponentProps } from 'react';

export function SidebarSeparator({
  className,
  style,
  children,
  ...props
}: ComponentProps<'p'>) {
  const depth = Base.useFolderDepth();

  return (
    <Base.SidebarSeparator
      className={cn(
        'mb-2 mt-6 px-2 text-xs font-medium tracking-wide text-fd-muted-foreground first:mt-0 [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      style={{
        paddingInlineStart: `calc(${2 + 3 * depth} * var(--spacing))`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Base.SidebarSeparator>
  );
}
