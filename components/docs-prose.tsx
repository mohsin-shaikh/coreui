import * as React from 'react';
import Link from 'fumadocs-core/link';

import { cn } from '@/lib/cn';

const bodyText =
  'text-ln-paragraph-sm text-ln-gray-600 md:text-ln-paragraph-md';

/* `ps-0` / `[&>li]:my-0` undo the fumadocs prose list defaults so the
   flex + gap rhythm below is the only source of spacing. */
const list = cn(
  'ml-6 mt-4 mb-0 ps-0 flex flex-col gap-3 [&>li]:my-0',
  bodyText,
);

export function DocsP({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={cn('mt-4 mb-0', bodyText, className)}
      {...props}
    />
  );
}

export function DocsUl({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'ul'>) {
  return <ul className={cn(list, 'list-disc', className)} {...props} />;
}

export function DocsOl({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'ol'>) {
  return <ol className={cn(list, 'list-decimal', className)} {...props} />;
}

export function DocsLink({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link className={cn('text-ln-orange underline', className)} {...props} />
  );
}
