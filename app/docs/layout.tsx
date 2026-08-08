import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsTooltipProvider } from '@/components/docs-tooltip-provider';
import { NotificationProvider } from '@/components/ui/notification-provider';
import { Toaster } from '@/components/ui/toast';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      <DocsTooltipProvider>
        {children}
        <NotificationProvider />
        <Toaster />
      </DocsTooltipProvider>
    </DocsLayout>
  );
}
