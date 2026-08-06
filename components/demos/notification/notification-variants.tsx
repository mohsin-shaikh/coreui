'use client';

import * as Button from '@/components/ui/button';
import { useNotification } from '@/hooks/use-notification';

export default function NotificationVariants() {
  const { notification } = useNotification();

  return (
    <div className="flex flex-col items-center gap-2">
      <Button.Root
        variant="neutral"
        mode="stroke"
        onClick={() =>
          notification({
            status: 'error',
            variant: 'filled',
            title: 'Filled & Error',
            description: 'Insert the notification description here.',
          })
        }
      >
        Filled & Error
      </Button.Root>
      <Button.Root
        variant="neutral"
        mode="stroke"
        onClick={() =>
          notification({
            status: 'warning',
            variant: 'light',
            title: 'Light & Warning',
            description: 'Insert the notification description here.',
          })
        }
      >
        Light & Warning
      </Button.Root>
      <Button.Root
        variant="neutral"
        mode="stroke"
        onClick={() =>
          notification({
            status: 'information',
            variant: 'lighter',
            title: 'Lighter & Information',
            description: 'Insert the notification description here.',
          })
        }
      >
        Lighter & Information
      </Button.Root>
      <Button.Root
        variant="neutral"
        mode="stroke"
        onClick={() =>
          notification({
            status: 'success',
            variant: 'stroke',
            title: 'Stroke & Success',
            description: 'Insert the notification description here.',
          })
        }
      >
        Stroke & Success
      </Button.Root>
    </div>
  );
}

export const code = `'use client';

import * as Button from '@/components/ui/button';
import { useNotification } from '@/hooks/use-notification';

export function NotificationVariants() {
  const { notification } = useNotification();

  return (
    <div className='flex flex-col items-center gap-2'>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            status: 'error',
            variant: 'filled',
            title: 'Filled & Error',
            description: 'Insert the notification description here.',
          })
        }
      >
        Filled & Error
      </Button.Root>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            status: 'warning',
            variant: 'light',
            title: 'Light & Warning',
            description: 'Insert the notification description here.',
          })
        }
      >
        Light & Warning
      </Button.Root>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            status: 'information',
            variant: 'lighter',
            title: 'Lighter & Information',
            description: 'Insert the notification description here.',
          })
        }
      >
        Lighter & Information
      </Button.Root>
      <Button.Root
        variant='neutral'
        mode='stroke'
        onClick={() =>
          notification({
            status: 'success',
            variant: 'stroke',
            title: 'Stroke & Success',
            description: 'Insert the notification description here.',
          })
        }
      >
        Stroke & Success
      </Button.Root>
    </div>
  );
}`;
