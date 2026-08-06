'use client';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export default function TooltipHtmlContent() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant="neutral" mode="stroke">
            Hover or focus
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content size="medium" className="max-w-60">
          <div className="flex flex-col gap-1">
            <span className="text-label-sm">Tooltip Title</span>
            <span className="text-paragraph-xs text-text-sub-600">
              Insert tooltip description here. It would look better as two lines
              of text.
            </span>
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export const code = `'use client';

import * as Button from '@/components/ui/button';
import * as Tooltip from '@/components/ui/tooltip';

export function TooltipHtmlContent() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Root variant='neutral' mode='stroke'>
            Hover or focus
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content size='medium' className='max-w-60'>
          <div className='flex flex-col gap-1'>
            <span className='text-label-sm'>Tooltip Title</span>
            <span className='text-paragraph-xs text-text-sub-600'>
              Insert tooltip description here. It would look better as two lines
              of text.
            </span>
          </div>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}`;
