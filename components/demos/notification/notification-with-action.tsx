'use client';

import * as Button from '@/components/ui/button';
import { useNotification } from '@/hooks/use-notification';

export default function NotificationWithAction() {
  const { notification } = useNotification();

  return (
    <Button.Root
      variant="neutral"
      mode="stroke"
      onClick={() =>
        notification({
          status: 'information',
          variant: 'filled',
          title: 'Notification',
          description: 'Insert the notification description here.',
          action: (
            <Button.Root
              variant="neutral"
              mode="ghost"
              size="xxsmall"
              className="text-static-white"
            >
              Upgrade
            </Button.Root>
          ),
        })
      }
    >
      Notification
    </Button.Root>
  );
}

export const code = `'use client';

import * as Button from '@/components/ui/button';
import { useNotification } from '@/hooks/use-notification';

export function NotificationWithAction() {
  const { notification } = useNotification();

  return (
    <Button.Root
      variant='neutral'
      mode='stroke'
      onClick={() =>
        notification({
          status: 'information',
          variant: 'filled',
          title: 'Notification',
          description: 'Insert the notification description here.',
          action: (
            <Button.Root
              variant='neutral'
              mode='ghost'
              size='xxsmall'
              className='text-static-white'
            >
              Upgrade
            </Button.Root>
          ),
        })
      }
    >
      Notification
    </Button.Root>
  );
}`;
