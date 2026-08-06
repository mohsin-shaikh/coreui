'use client';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export default function TooltipPosition() {
  return (
    <Tooltip.Provider>
      <div className="flex flex-wrap items-center gap-2">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke">
              Left
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side="left">
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke">
              Top
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side="top">
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke">
              Bottom
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side="bottom">
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant="neutral" mode="stroke">
              Right
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">
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

export function TooltipPosition() {
  return (
    <Tooltip.Provider>
      <div className='flex flex-wrap items-center gap-2'>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant='neutral' mode='stroke'>
              Left
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side='left'>
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant='neutral' mode='stroke'>
              Top
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side='top'>
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant='neutral' mode='stroke'>
              Bottom
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side='bottom'>
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button.Root variant='neutral' mode='stroke'>
              Right
            </Button.Root>
          </Tooltip.Trigger>
          <Tooltip.Content side='right'>
            Insert tooltip description here.
          </Tooltip.Content>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  );
}`;
