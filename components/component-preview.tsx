'use client';

import * as React from 'react';
import { Check, Code2, Copy, Eye } from 'lucide-react';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

import { Index } from '@/components/demos';
import { cn } from '@/lib/cn';

export function ComponentPreview({
  name,
  className,
  align = 'center',
}: {
  name: string;
  className?: string;
  align?: 'center' | 'start';
}) {
  const [view, setView] = React.useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = React.useState(false);
  const demo = Index[name];

  if (!demo) {
    return (
      <div className="text-fd-muted-foreground rounded-xl border border-dashed p-6 text-sm">
        Demo <code className="font-mono">{name}</code> not found.
      </div>
    );
  }

  const Preview = demo.component;

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(demo.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard errors
    }
  }

  return (
    <div className="not-prose my-4 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="bg-bg-weak-50 flex items-center rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setView('preview')}
            className={cn(
              'text-label-sm inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors',
              view === 'preview'
                ? 'bg-bg-white-0 text-text-strong-950 shadow-regular-xs'
                : 'text-text-sub-600 hover:text-text-strong-950',
            )}
          >
            <Eye className="size-4" />
            Preview
          </button>
          <button
            type="button"
            onClick={() => setView('code')}
            className={cn(
              'text-label-sm inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors',
              view === 'code'
                ? 'bg-bg-white-0 text-text-strong-950 shadow-regular-xs'
                : 'text-text-sub-600 hover:text-text-strong-950',
            )}
          >
            <Code2 className="size-4" />
            Code
          </button>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className="bg-bg-weak-50 text-text-sub-600 hover:text-text-strong-950 text-label-sm inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-colors"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          Copy
        </button>
      </div>

      <div className="border-stroke-soft-200 overflow-hidden rounded-xl border">
        {view === 'preview' ? (
          <div
            className={cn(
              'bg-bg-white-0 flex min-h-[200px] w-full flex-wrap gap-4 p-10',
              align === 'center' && 'items-center justify-center',
              align === 'start' && 'items-start justify-start',
              className,
            )}
          >
            <Preview />
          </div>
        ) : (
          <div className="bg-bg-white-0 [&_figure]:m-0 [&_figure]:rounded-none [&_figure]:border-0">
            <DynamicCodeBlock
              lang="tsx"
              code={demo.code}
              codeblock={{ allowCopy: false }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
