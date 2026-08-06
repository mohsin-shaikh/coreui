'use client';

import * as Notification from '@/components/ui/notification';

import { NotificationPreview } from './notification-preview';

export default function NotificationDemo() {
  return (
    <NotificationPreview>
      <Notification.Root
        open
        duration={Infinity}
        status="information"
        variant="filled"
        title="Notification"
        description="Insert the notification description here."
      />
    </NotificationPreview>
  );
}

export const code = `'use client';

import * as Notification from '@/components/ui/notification';

import { NotificationPreview } from '@/components/demos/notification/notification-preview';

export default function NotificationDemo() {
  return (
    <NotificationPreview>
      <Notification.Root
        open
        duration={Infinity}
        status="information"
        variant="filled"
        title="Notification"
        description="Insert the notification description here."
      />
    </NotificationPreview>
  );
}`;
