'use client';

import * as React from 'react';
import {
  RiCheckLine,
  RiCodeSSlashLine,
  RiEyeLine,
  RiFileCopyLine,
} from '@remixicon/react';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

import { Index } from '@/components/demos';
import * as SegmentedControl from '@/components/ui/segmented-control';
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
  const [view, setView] = React.useState('preview');
  const [copied, setCopied] = React.useState(false);
  const demo = Index[name];

  if (!demo) {
    return (
      <div className="text-text-sub-600 rounded-xl border border-dashed border-stroke-soft-200 p-6 text-sm">
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
    <SegmentedControl.Root
      value={view}
      onValueChange={setView}
      className="component-preview not-prose my-5 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between gap-3">
        <SegmentedControl.List className="w-fit auto-cols-max">
          <SegmentedControl.Trigger value="preview" className="px-2.5">
            <RiEyeLine className="size-4" />
            Preview
          </SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="code" className="px-2.5">
            <RiCodeSSlashLine className="size-4" />
            Code
          </SegmentedControl.Trigger>
        </SegmentedControl.List>

        <button
          type="button"
          onClick={onCopy}
          className="bg-bg-weak-25 text-label-sm text-text-sub-600 hover:text-text-strong-950 flex h-7 items-center gap-1 rounded-lg pr-3 pl-1.5 transition"
        >
          {copied ? (
            <RiCheckLine className="size-5" />
          ) : (
            <RiFileCopyLine className="size-5" />
          )}
          Copy
        </button>
      </div>

      <div className="bg-bg-white-0 relative overflow-hidden rounded-20 ring-1 ring-gray-100">
        <SegmentedControl.Content value="preview" className="outline-none">
          <div
            className={cn(
              'preview flex min-h-64 w-full flex-wrap gap-4 p-10 md:min-h-64',
              align === 'center' && 'items-center justify-center',
              align === 'start' && 'items-start justify-start',
              className,
            )}
          >
            <Preview />
          </div>
        </SegmentedControl.Content>
        <SegmentedControl.Content value="code" className="outline-none">
          <div className="max-h-150 overflow-auto p-1 [&_figure]:m-0 [&_figure]:rounded-[11px] [&_figure]:border-0 [&_figure]:shadow-none">
            <DynamicCodeBlock
              lang="tsx"
              code={demo.code}
              codeblock={{
                allowCopy: false,
                'data-line-numbers': true,
              }}
            />
          </div>
        </SegmentedControl.Content>
      </div>
    </SegmentedControl.Root>
  );
}
