'use client';

import * as React from 'react';
import { RiCheckLine } from '@remixicon/react';

import { Icons } from '@/components/icons';
import { cn } from '@/lib/cn';

export const CodeFrameContext = React.createContext(false);

/** white code surface (terminal / short snippets) */
export const docsCodeSurfaceClassName = cn(
  'w-full overflow-auto rounded-[11px] bg-ln-gray-0 p-4',
  'text-ln-paragraph-sm font-medium leading-[22px] tracking-normal shadow-docs-xs',
  // Flatten fumadocs CodeBlock / DynamicCodeBlock chrome when nested
  '[&_figure]:m-0 [&_figure]:border-0 [&_figure]:bg-transparent [&_figure]:p-0 [&_figure]:shadow-none [&_figure]:rounded-none',
  '[&_figure>button]:hidden [&_figure_[class*="absolute"]]:hidden',
  '[&_[role=region]]:max-h-none [&_[role=region]]:overflow-visible [&_[role=region]]:p-0',
  '[&_pre]:m-0 [&_pre]:min-w-0 [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:text-inherit',
  '[&_code]:font-medium [&_code]:tracking-normal [&_code]:text-inherit',
);

/** source preview surface — max height + sticky line numbers */
export const docsSourceSurfaceClassName = cn(
  'component-source relative flex max-h-[600px] w-full flex-col overflow-hidden rounded-[11px] bg-ln-gray-0',
  'text-ln-paragraph-sm font-medium leading-[22px] tracking-normal shadow-docs-xs',
  // Flatten fumadocs CodeBlock chrome — single scrollport (outer) so sticky guts work.
  // figure has overflow-hidden by default which kills position:sticky.
  '[&_figure]:m-0 [&_figure]:min-w-full [&_figure]:w-max [&_figure]:overflow-visible [&_figure]:border-0 [&_figure]:bg-transparent [&_figure]:p-0 [&_figure]:shadow-none [&_figure]:rounded-none',
  '[&_figure>button]:hidden [&_figure_[class*="absolute"]]:hidden',
  '[&_[role=region]]:max-h-none [&_[role=region]]:min-w-full [&_[role=region]]:w-max [&_[role=region]]:overflow-visible [&_[role=region]]:p-0',
  '[&_pre]:m-0 [&_pre]:min-w-full [&_pre]:w-max [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:text-inherit',
  '[&_code]:min-w-full [&_code]:w-max [&_code]:font-medium [&_code]:tracking-normal [&_code]:text-inherit',
);

export function DocsCodeFrame({
  label,
  code,
  className,
  variant = 'terminal',
  children,
}: {
  label: React.ReactNode;
  code?: string;
  className?: string;
  /** `source` = file preview with sticky line numbers + max-height */
  variant?: 'terminal' | 'source';
  children: React.ReactNode;
}) {
  const [copied, setCopied] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  async function onCopy() {
    const text = code ?? contentRef.current?.textContent?.trim() ?? '';
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard errors
    }
  }

  const isSource = variant === 'source';

  return (
    <CodeFrameContext.Provider value={true}>
      <div
        className={cn(
          'not-prose my-4 rounded-20 bg-ln-gray-25 md:mb-6',
          className,
        )}
      >
        <div className="flex flex-col gap-3 p-3">
          <div className="flex w-full items-center justify-between px-2 md:py-2">
            <span className="text-ln-paragraph-xs md:text-ln-paragraph-sm font-mono font-medium tracking-normal text-ln-gray-500">
              {label}
            </span>
            <button
              type="button"
              onClick={onCopy}
              className="text-ln-gray-500 transition hover:text-ln-gray-800"
              aria-label={copied ? 'Copied' : 'Copy'}
            >
              {copied ? (
                <RiCheckLine className="size-6" />
              ) : (
                <Icons.Copy size={24} />
              )}
            </button>
          </div>

          {isSource ? (
            <div className={docsSourceSurfaceClassName}>
              <div
                ref={contentRef}
                className="no-scrollbar h-full w-full overflow-auto overscroll-contain [&_code]:py-4 [&_code]:pr-4"
              >
                {children}
              </div>
            </div>
          ) : (
            <div ref={contentRef} className={docsCodeSurfaceClassName}>
              {children}
            </div>
          )}
        </div>
      </div>
    </CodeFrameContext.Provider>
  );
}

/**
 * MDX code fences. Bare inside a frame, wrapped when standalone.
 *
 * fumadocs hands its `pre` the fence's `title` and an `icon` markup string,
 * expecting its own CodeBlock to consume them; `icon` is dropped here so it
 * doesn't land on the DOM node.
 */
export function DocsPre({
  className,
  title,
  icon: _icon,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'pre'> & { icon?: unknown }) {
  const inFrame = React.useContext(CodeFrameContext);

  const pre = (
    <pre
      className={cn(
        'm-0 bg-transparent p-0 text-inherit font-medium tracking-normal',
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  );

  if (inFrame) {
    return pre;
  }

  // No `title` means an illustrative snippet rather than a file, and the
  // language isn't available here — so the label slot is left empty instead of
  // captioning JSX as a terminal.
  return <DocsCodeFrame label={title}>{pre}</DocsCodeFrame>;
}

/**
 * Rehype pretty-code figures: bare inside a frame, wrapped when standalone.
 */
export function DocsFigure({
  className,
  children,
  'data-rehype-pretty-code-figure': prettyCodeFigure,
  ...props
}: React.ComponentPropsWithoutRef<'figure'> & {
  'data-rehype-pretty-code-figure'?: string | boolean | '';
}) {
  const inFrame = React.useContext(CodeFrameContext);
  const isCodeFigure = prettyCodeFigure !== undefined;

  const figure = (
    <figure
      {...props}
      {...(isCodeFigure
        ? { 'data-rehype-pretty-code-figure': prettyCodeFigure }
        : {})}
      className={cn(
        'm-0 border-0 bg-transparent p-0 shadow-none',
        className,
      )}
    >
      {children}
    </figure>
  );

  if (!isCodeFigure || inFrame) {
    return figure;
  }

  return <DocsCodeFrame label="terminal">{figure}</DocsCodeFrame>;
}
