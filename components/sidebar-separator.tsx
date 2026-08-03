'use client';

import { cn } from '@/lib/cn';
import * as Base from 'fumadocs-ui/components/sidebar/base';
import type * as PageTree from 'fumadocs-core/page-tree';

export function SidebarSeparator({ item }: { item: PageTree.Separator }) {
  const depth = Base.useFolderDepth();

  return (
    <Base.SidebarSeparator
      className={cn(
        'mb-2 mt-6 px-2 text-xs font-medium tracking-wide text-fd-muted-foreground first:mt-0 [&_svg]:size-4 [&_svg]:shrink-0',
      )}
      style={{
        paddingInlineStart: `calc(${2 + 3 * depth} * var(--spacing))`,
      }}
    >
      {item.icon}
      {item.name}
    </Base.SidebarSeparator>
  );
}
