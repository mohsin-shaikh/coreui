import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

type TypographyMeta = {
  weight: string;
  size: string;
  lineHeight: string;
  letterSpacing: string;
};

function MetaBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-fd-secondary rounded-md border border-fd-border px-3 py-1 text-xs">
      <span className="text-fd-muted-foreground">{label}: </span>
      <span className="text-fd-foreground">{value}</span>
    </div>
  );
}

export function TypographySample({
  name,
  className,
  meta,
  children = 'The quick brown fox jumps over the lazy dog.',
}: {
  name: string;
  className: string;
  meta: TypographyMeta;
  children?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-fd-foreground text-base font-medium">{name}</div>
      <div className={cn('text-text-strong-950', className)}>{children}</div>
      <div className="flex flex-wrap gap-3">
        <MetaBadge label="Weight" value={meta.weight} />
        <MetaBadge label="Font Size" value={meta.size} />
        <MetaBadge label="Line Height" value={meta.lineHeight} />
        <MetaBadge label="Letter Spacing" value={meta.letterSpacing} />
      </div>
    </div>
  );
}

export function TypographySection({ children }: { children: ReactNode }) {
  return <div className="not-prose flex flex-col gap-12">{children}</div>;
}
