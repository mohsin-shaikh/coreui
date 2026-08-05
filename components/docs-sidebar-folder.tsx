'use client';

import type { ReactNode } from 'react';
import type * as PageTree from 'fumadocs-core/page-tree';
import * as Base from 'fumadocs-ui/components/sidebar/base';
import { useTreePath } from 'fumadocs-ui/contexts/tree';
import { usePathname } from 'fumadocs-core/framework';

import { cn } from '@/lib/cn';

/**
 * Fumadocs DocsLayout FolderTrigger passes `className` as a function (Base UI).
 * When `collapsible: false`, that className is spread onto a raw `<div>`, which
 * React rejects. Render folders via Base with string classNames instead.
 */

function getItemOffset(depth: number) {
  return `calc(${2 + 3 * depth} * var(--spacing))`;
}

function normalize(urlOrPath: string) {
  if (urlOrPath.length > 1 && urlOrPath.endsWith('/')) {
    return urlOrPath.slice(0, -1);
  }
  return urlOrPath;
}

function isActive(href: string, pathname: string, nested = false) {
  href = normalize(href);
  pathname = normalize(pathname);
  return href === pathname || (nested && pathname.startsWith(`${href}/`));
}

const itemBaseClassName = cn(
  'relative flex flex-row items-center gap-2 rounded-lg p-2 text-start',
  'text-fd-muted-foreground wrap-anywhere [&_svg]:size-5 [&_svg]:shrink-0',
);

export function DocsSidebarFolder({
  item,
  children,
}: {
  item: PageTree.Folder;
  children: ReactNode;
}) {
  const path = useTreePath();
  const pathname = usePathname();

  return (
    <Base.SidebarFolder
      collapsible={item.collapsible}
      active={path.includes(item)}
      defaultOpen={item.defaultOpen}
    >
      {item.index ? (
        <FolderIndexLink item={item} pathname={pathname} />
      ) : (
        <FolderTitle>
          {item.icon}
          {item.name}
        </FolderTitle>
      )}
      <FolderBody>{children}</FolderBody>
    </Base.SidebarFolder>
  );
}

function FolderTitle({ children }: { children: ReactNode }) {
  const folder = Base.useFolder();
  const depth = folder?.depth ?? 1;
  const collapsible = folder?.collapsible ?? true;

  return (
    <Base.SidebarFolderTrigger
      className={cn(
        itemBaseClassName,
        'w-full',
        collapsible &&
          'transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none',
      )}
      style={{ paddingInlineStart: getItemOffset(depth - 1) }}
    >
      {children}
    </Base.SidebarFolderTrigger>
  );
}

function FolderIndexLink({
  item,
  pathname,
}: {
  item: PageTree.Folder;
  pathname: string;
}) {
  const folder = Base.useFolder();
  const depth = folder?.depth ?? 1;
  const index = item.index!;

  return (
    <Base.SidebarFolderLink
      href={index.url}
      external={index.external}
      active={isActive(index.url, pathname)}
      className={cn(
        itemBaseClassName,
        'w-full transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none',
        'data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors',
        depth > 1 &&
          "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:inset-s-2.5",
      )}
      style={{ paddingInlineStart: getItemOffset(depth - 1) }}
    >
      {item.icon}
      {item.name}
    </Base.SidebarFolderLink>
  );
}

function FolderBody({ children }: { children: ReactNode }) {
  const depth = Base.useFolderDepth();

  return (
    <Base.SidebarFolderContent
      className={cn(
        'relative flex flex-col gap-0.5 pt-0.5',
        depth === 1 &&
          "before:content-[''] before:absolute before:inset-y-1 before:inset-s-2.5 before:w-px before:bg-fd-border",
      )}
    >
      {children}
    </Base.SidebarFolderContent>
  );
}
