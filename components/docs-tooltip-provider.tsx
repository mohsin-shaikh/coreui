'use client';

import * as React from 'react';

import * as Tooltip from '@/components/ui/tooltip';

export function DocsTooltipProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
      {children}
    </Tooltip.Provider>
  );
}
