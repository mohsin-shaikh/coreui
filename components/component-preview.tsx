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
import { cn } from '@/lib/cn';
import { Icons } from './icons';

const tabTriggerClassName = cn(
  'text-fd-muted-foreground flex h-7 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium transition',
  'data-[state=active]:bg-fd-background data-[state=active]:text-fd-foreground data-[state=active]:shadow-sm',
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
      <div className="text-fd-muted-foreground rounded-xl border border-dashed border-fd-border p-6 text-sm">
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
          <Tabs.List className="bg-fd-secondary flex gap-1 rounded-lg p-1">
            <Tabs.Trigger value="preview" className={tabTriggerClassName}>
              <RiEyeLine className="size-4" />
              Preview
            </Tabs.Trigger>
            <Tabs.Trigger value="code" className={tabTriggerClassName}>
              <RiCodeSSlashLine className="size-4" />
              Code
            </Tabs.Trigger>
          </Tabs.List>

          <button
            type="button"
            onClick={onCopy}
            className="bg-fd-secondary text-fd-muted-foreground hover:text-fd-foreground flex h-7 items-center gap-1 rounded-lg border border-fd-border px-2.5 text-sm font-medium"
            aria-label={copied ? 'Copied' : 'Copy'}
          >
            {copied ? (
              <RiCheckLine className="size-4" />
            ) : (
              <Icons.Copy className="size-4" />
            )}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>

        <Tabs.Content
          value="preview"
          className="relative rounded-xl border border-fd-border bg-white dark:bg-neutral-950"
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

        <Tabs.Content value="code">
          <DynamicCodeBlock
            lang="tsx"
            code={demo.code}
            codeblock={{
              allowCopy: false,
              className: 'my-0',
              'data-line-numbers': true,
            }}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
