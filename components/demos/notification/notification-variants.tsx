'use client';

import * as Notification from '@/components/ui/notification';

export default function NotificationVariants() {
  return (
    <Notification.Provider swipeDirection="right">
      <div className="flex w-full max-w-96 flex-col gap-2">
        <Notification.Root
          open
          duration={Infinity}
          status="error"
          variant="filled"
          title="Filled & Error"
          description="Insert the notification description here."
        />
        <Notification.Root
          open
          duration={Infinity}
          status="warning"
          variant="light"
          title="Light & Warning"
          description="Insert the notification description here."
        />
        <Notification.Root
          open
          duration={Infinity}
          status="information"
          variant="lighter"
          title="Lighter & Information"
          description="Insert the notification description here."
        />
        <Notification.Root
          open
          duration={Infinity}
          status="success"
          variant="stroke"
          title="Stroke & Success"
          description="Insert the notification description here."
        />
      </div>
      <Notification.Viewport className="!relative !inset-auto !w-full !max-w-none !p-0" />
    </Notification.Provider>
  );
}

export const code = `'use client';

import * as Notification from '@/components/ui/notification';

export default function NotificationVariants() {
  return (
    <Notification.Provider swipeDirection="right">
      <div className="flex w-full max-w-96 flex-col gap-2">
        <Notification.Root
          open
          duration={Infinity}
          status="error"
          variant="filled"
          title="Filled & Error"
          description="Insert the notification description here."
        />
        <Notification.Root
          open
          duration={Infinity}
          status="warning"
          variant="light"
          title="Light & Warning"
          description="Insert the notification description here."
        />
        <Notification.Root
          open
          duration={Infinity}
          status="information"
          variant="lighter"
          title="Lighter & Information"
          description="Insert the notification description here."
        />
        <Notification.Root
          open
          duration={Infinity}
          status="success"
          variant="stroke"
          title="Stroke & Success"
          description="Insert the notification description here."
        />
      </div>
      <Notification.Viewport className="!relative !inset-auto !w-full !max-w-none !p-0" />
    </Notification.Provider>
  );
}`;
