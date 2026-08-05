import * as React from 'react';

import { cn } from '@/lib/cn';

/** bordered section title with in-heading anchor */
export function DocsH2({
  className,
  id,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      id={id}
      className={cn(
        'mb-2.5 mt-7 scroll-mt-[calc(var(--fd-docs-row-3)+0.75rem)] border-b border-ln-gray-100 pb-4',
        'text-ln-title-h5 text-ln-gray-900 first:mt-0',
        'md:mb-4 md:mt-10 md:pb-6',
        className,
      )}
      {...props}
    >
      {id ? (
        <a
          className="subheading-anchor text-inherit no-underline"
          aria-label="Link to section"
          href={`#${id}`}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </h2>
  );
}

/** subsection title with in-heading anchor; restyled as a step title inside `.fd-step` */
export function DocsH3({
  className,
  id,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3
      id={id}
      className={cn(
        'relative mb-1 mt-6 scroll-mt-[calc(var(--fd-docs-row-3)+0.75rem)]',
        'text-ln-title-h6 text-ln-gray-900',
        'md:mt-8 md:text-ln-title-h5',
        className,
      )}
      {...props}
    >
      {id ? (
        <a
          className="subheading-anchor text-inherit no-underline"
          aria-label="Link to section"
          href={`#${id}`}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </h3>
  );
}
