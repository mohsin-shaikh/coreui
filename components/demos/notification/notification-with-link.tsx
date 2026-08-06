'use client';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';
import { useNotification } from '@/hooks/use-notification';

export default function NotificationWithLink() {
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
            <LinkButton.Root
              variant="modifiable"
              size="small"
              underline
              className="text-static-white"
            >
              Upgrade
            </LinkButton.Root>
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
import * as LinkButton from '@/components/ui/link-button';
import { useNotification } from '@/hooks/use-notification';

export function NotificationWithLink() {
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
            <LinkButton.Root
              variant='modifiable'
              size='small'
              underline
              className='text-static-white'
            >
              Upgrade
            </LinkButton.Root>
          ),
        })
      }
    >
      Notification
    </Button.Root>
  );
}`;
