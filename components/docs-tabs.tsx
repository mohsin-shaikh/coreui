'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { RiCheckLine } from '@remixicon/react';

import { CodeFrameContext, docsCodeSurfaceClassName } from '@/components/docs-code-frame';
import { Icons } from '@/components/icons';
import { useTabObserver } from '@/hooks/use-tab-observer';
import { cn } from '@/lib/cn';

function escapeValue(value: string) {
  return value.toLowerCase().replace(/\s/, '-');
}

type TabsContextValue = {
  items?: string[];
  collection: string[];
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) {
    throw new Error('Tab must be used within Tabs');
  }
  return ctx;
}

/** Trigger row with the sliding orange underline, shared by both tab flavours. */
function TabsNav({ items, className }: { items: string[]; className?: string }) {
  const [lineStyle, setLineStyle] = React.useState({ width: 0, left: 0 });

  const { mounted, listRef } = useTabObserver({
    onActiveTabChange: (_, activeTab) => {
      const { offsetWidth: width, offsetLeft: left } = activeTab;
      setLineStyle({ width, left });
    },
  });

  return (
    <TabsPrimitive.List
      ref={listRef}
      className={cn(
        'group relative flex items-center gap-5 border-b border-ln-gray-100',
        className,
      )}
    >
      {items.map((item) => (
        <TabsPrimitive.Trigger
          key={item}
          value={escapeValue(item)}
          className="text-ln-label-xs text-ln-gray-450 data-[state=active]:text-ln-gray-900 md:text-ln-label-sm outline-none transition-colors"
        >
          {item}
        </TabsPrimitive.Trigger>
      ))}
      <div
        className={cn(
          'absolute -bottom-px left-0 h-px bg-ln-orange transition-all duration-300',
          !mounted && 'opacity-0',
        )}
        style={{
          transform: `translate3d(${lineStyle.left}px, 0, 0)`,
          width: `${lineStyle.width}px`,
          transitionTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
        }}
        aria-hidden="true"
      />
    </TabsPrimitive.List>
  );
}

/**
 * Tabs holding prose rather than a single snippet — CLI vs Manual and the like.
 *
 * Deliberately does not provide `CodeFrameContext`, so code blocks inside a
 * panel still render their own frame.
 */
export function ContentTabs({
  items,
  defaultIndex = 0,
  defaultValue,
  className,
  children,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  'orientation'
> & {
  items: string[];
  defaultIndex?: number;
}) {
  const resolvedDefault =
    defaultValue ?? escapeValue(items[defaultIndex]!);
  const [value, setValue] = React.useState(resolvedDefault);
  const collection = React.useMemo(() => [] as string[], []);

  return (
    <TabsPrimitive.Root
      dir="ltr"
      orientation="horizontal"
      value={value}
      onValueChange={(next) => {
        if (!items.some((item) => escapeValue(item) === next)) return;
        setValue(next);
      }}
      className={cn('mt-3 md:mt-4', className)}
      {...props}
    >
      <TabsNav items={items} className="pb-3" />
      <TabsContext.Provider value={{ items, collection }}>
        {children}
      </TabsContext.Provider>
    </TabsPrimitive.Root>
  );
}

export function Tabs({
  items,
  label = 'terminal',
  defaultIndex = 0,
  defaultValue,
  className,
  children,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
  'orientation'
> & {
  items?: string[];
  label?: React.ReactNode;
  defaultIndex?: number;
}) {
  const resolvedDefault =
    defaultValue ?? (items ? escapeValue(items[defaultIndex]!) : undefined);
  const [value, setValue] = React.useState(resolvedDefault);
  const collection = React.useMemo(() => [] as string[], []);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  async function onCopy() {
    const panel = contentRef.current?.querySelector(
      '[role="tabpanel"][data-state="active"]',
    );
    const text = panel?.textContent?.trim();
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard errors
    }
  }

  return (
    <TabsPrimitive.Root
      dir="ltr"
      orientation="horizontal"
      value={value}
      onValueChange={(next) => {
        if (items && !items.some((item) => escapeValue(item) === next)) return;
        setValue(next);
      }}
      className={cn(
        'not-prose my-4 rounded-20 bg-ln-gray-25 md:mb-6',
        className,
      )}
      {...props}
    >
      {items ? (
        <TabsNav items={items} className="h-12 px-5 md:h-[52px]" />
      ) : null}

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

        <div ref={contentRef} className={docsCodeSurfaceClassName}>
          <CodeFrameContext.Provider value={true}>
            <TabsContext.Provider value={{ items, collection }}>
              {children}
            </TabsContext.Provider>
          </CodeFrameContext.Provider>
        </div>
      </div>
    </TabsPrimitive.Root>
  );
}

function useCollectionIndex() {
  const key = React.useId();
  const { collection } = useTabsContext();

  React.useEffect(() => {
    return () => {
      const idx = collection.indexOf(key);
      if (idx !== -1) collection.splice(idx, 1);
    };
  }, [key, collection]);

  if (!collection.includes(key)) collection.push(key);
  return collection.indexOf(key);
}

export function Tab({
  value,
  className,
  children,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
  'value'
> & {
  value?: string;
}) {
  const { items } = useTabsContext();
  const resolved = value ?? items?.at(useCollectionIndex());

  if (!resolved) {
    throw new Error(
      'Failed to resolve tab `value`, please pass a `value` prop to the Tab component.',
    );
  }

  return (
    <TabsPrimitive.Content
      value={escapeValue(resolved)}
      className={cn('outline-none', className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
}

export function TabsList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        'group relative flex h-12 items-center gap-5 border-b border-ln-gray-100 px-5 md:h-[52px]',
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'text-ln-label-xs text-ln-gray-450 data-[state=active]:text-ln-gray-900 md:text-ln-label-sm outline-none transition-colors',
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn('outline-none', className)}
      {...props}
    />
  );
}
