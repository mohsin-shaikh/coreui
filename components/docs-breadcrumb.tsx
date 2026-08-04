'use client';

import { cn } from '@/lib/cn';
import { useTreeContext, useTreePath } from 'fumadocs-ui/contexts/tree';
import Link from 'fumadocs-core/link';
import { RiArrowRightSLine } from '@remixicon/react';
import { Fragment, useMemo, type ComponentProps } from 'react';
import { getBreadcrumbItemsFromPath } from 'fumadocs-core/breadcrumb';
import type { BreadcrumbOptions } from 'fumadocs-core/breadcrumb';
import { usePathname } from 'next/navigation';

type BreadcrumbProps = BreadcrumbOptions & ComponentProps<'div'>;

export function DocsBreadcrumb({
  includeRoot,
  includeSeparator,
  includePage,
  ...props
}: BreadcrumbProps) {
  const pathname = usePathname();
  const path = useTreePath();
  const { root } = useTreeContext();

  const items = useMemo(() => {
    if (pathname.startsWith('/docs/v0.1/ui/')) {
      return [{ name: 'Base Components' }];
    }

    return getBreadcrumbItemsFromPath(root, path, {
      includePage,
      includeSeparator,
      includeRoot,
    });
  }, [includePage, includeRoot, includeSeparator, path, pathname, root]);

  if (items.length === 0) return null;

  return (
    <div
      {...props}
      className={cn('flex items-center gap-1.5 text-sm text-fd-muted-foreground', props.className)}
    >
      {items.map((item, i) => {
        const className = cn(
          'truncate',
          i === items.length - 1 && 'text-orange-500 font-medium',
        );

        return (
          <Fragment key={i}>
            {i !== 0 && <RiArrowRightSLine className="size-3.5 shrink-0" />}
            {item.url ? (
              <Link href={item.url} className={cn(className, 'transition-opacity hover:opacity-80')}>
                {item.name}
              </Link>
            ) : (
              <span className={className}>{item.name}</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
