'use client';

import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import {
  RiCheckLine,
  RiCodeSSlashLine,
  RiEyeLine,
} from '@remixicon/react';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

import { Index } from '@/components/demos';
import { docsSourceSurfaceClassName } from '@/components/docs-code-frame';
import { cn } from '@/lib/cn';
import { cssVariablesThemeForShiki } from '@/lib/shiki-theme';
import { Icons } from './icons';

const tabTriggerClassName = cn(
  'text-ln-label-sm text-ln-gray-500 flex h-7 items-center gap-1.5 rounded-lg pr-2.5 pl-2 transition',
  'data-[state=active]:bg-ln-gray-0 data-[state=active]:text-ln-gray-800 data-[state=active]:shadow-docs-button-white',
);

export function ComponentPreview({
  name,
  className,
  align = 'center',
}: {
  name: string;
  className?: string;
  align?: 'center' | 'start';
}) {
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
    <div className="component-preview not-prose mt-5">
      <Tabs.Root defaultValue="preview">
        <div className="flex items-center justify-between gap-3 pb-4">
          <Tabs.List className="flex gap-2">
            <Tabs.Trigger value="preview" className={tabTriggerClassName}>
              <RiEyeLine className="size-4.5 text-ln-gray-500" />
              Preview
            </Tabs.Trigger>
            <Tabs.Trigger value="code" className={tabTriggerClassName}>
              <RiCodeSSlashLine className="size-4.5 text-ln-gray-500" />
              Code
            </Tabs.Trigger>
          </Tabs.List>

          <button
            type="button"
            onClick={onCopy}
            className="bg-bg-weak-25 text-ln-label-sm text-ln-gray-600 flex h-7 items-center gap-1 rounded-lg pr-3 pl-1.5"
          >
            {copied ? (
              <RiCheckLine className="size-5 text-ln-gray-400" />
            ) : (
              <Icons.Copy className="size-5 text-ln-gray-400" />
            )}
            Copy
          </button>
        </div>

        <Tabs.Content
          value="preview"
          className="relative rounded-20 ring-1 ring-ln-gray-100 bg-ln-gray-0"
        >
          <div
            className={cn(
              'preview flex min-h-64 w-full justify-center p-10 md:min-h-64',
              align === 'center' && 'items-center',
              align === 'start' && 'items-start justify-start',
              'flex-wrap gap-4',
              className,
            )}
          >
            <Preview />
          </div>
        </Tabs.Content>

        <Tabs.Content value="code" className="rounded-20 bg-ln-gray-25 p-3">
          <div className={docsSourceSurfaceClassName}>
            <div className="no-scrollbar h-full w-full overflow-auto overscroll-contain [&_code]:py-4 [&_code]:pr-4">
              <DynamicCodeBlock
                lang="tsx"
                code={demo.code}
                options={{ theme: cssVariablesThemeForShiki }}
                codeblock={{
                  allowCopy: false,
                }}
              />
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
