'use client';

import * as LinkButton from '@/components/ui/link-button';
import * as Notification from '@/components/ui/notification';

import { NotificationPreview } from './notification-preview';

export default function NotificationWithLink() {
  return (
    <NotificationPreview>
      <Notification.Root
        open
        duration={Infinity}
        status="information"
        variant="filled"
        title="Notification"
        description="Insert the notification description here."
        action={
          <LinkButton.Root
            variant="modifiable"
            size="small"
            underline
            className="text-static-white"
          >
            Upgrade
          </LinkButton.Root>
        }
      />
    </NotificationPreview>
  );
}

export const code = `'use client';

import * as LinkButton from '@/components/ui/link-button';
import * as Notification from '@/components/ui/notification';

import { NotificationPreview } from '@/components/demos/notification/notification-preview';

export default function NotificationWithLink() {
  return (
    <NotificationPreview>
      <Notification.Root
        open
        duration={Infinity}
        status="information"
        variant="filled"
        title="Notification"
        description="Insert the notification description here."
        action={
          <LinkButton.Root
            variant="modifiable"
            size="small"
            underline
            className="text-static-white"
          >
            Upgrade
          </LinkButton.Root>
        }
      />
    </NotificationPreview>
  );
}`;
