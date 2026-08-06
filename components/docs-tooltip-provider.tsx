'use client';

import * as Tooltip from '@/components/ui/tooltip';

export function DocsTooltipProvider() {
  return <Tooltip.Provider delayDuration={200} skipDelayDuration={0} />;
}
