'use client';

import type * as PageTree from 'fumadocs-core/page-tree';

/** dashed sidebar divider for page-tree `---` separators */
export function SidebarSeparator({ item }: { item: PageTree.Separator }) {
  if (item.name) {
    return (
      <div className="mb-2 mt-6 px-2 text-xs font-medium tracking-wide text-fd-muted-foreground first:mt-0 [&_svg]:size-5 [&_svg]:shrink-0">
        {item.icon}
        {item.name}
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-hidden
      className="docs-dashed-separator -mt-px h-px w-full text-ln-gray-200"
    />
  );
}
