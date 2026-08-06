'use client';

import type { ReactNode } from 'react';

import * as Notification from '@/components/ui/notification';

export function NotificationPreview({ children }: { children: ReactNode }) {
  return (
    <Notification.Provider swipeDirection="right">
      {children}
      <Notification.Viewport className="!relative !inset-auto !w-full !max-w-none !p-0" />
    </Notification.Provider>
  );
}
