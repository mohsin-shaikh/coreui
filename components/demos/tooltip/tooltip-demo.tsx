'use client';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export default function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant="neutral" mode="stroke">
            Hover or focus
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content>Insert tooltip description here.</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export const code = `'use client';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Hover or focus
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content>Insert tooltip description here.</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}`;
