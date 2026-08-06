'use client';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export default function TooltipSize() {
  return (
    <Tooltip.Provider>
      <div className="flex flex-wrap items-center gap-2">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke">
              Medium
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size="medium">
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke">
              Small (default)
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size="small">
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke">
              XSmall
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size="xsmall">
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  );
}

export const code = `'use client';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export function TooltipSize() {
  return (
    <Tooltip.Provider>
      <div className='flex flex-wrap items-center gap-2'>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant='neutral' mode='stroke'>
              Medium
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size='medium'>
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant='neutral' mode='stroke'>
              Small (default)
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size='small'>
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant='neutral' mode='stroke'>
              XSmall
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content size='xsmall'>
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  );
}`;
