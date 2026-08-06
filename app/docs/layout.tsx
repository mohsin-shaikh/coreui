import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsSidebarFolder } from '@/components/docs-sidebar-folder';
import { SidebarSeparator } from '@/components/sidebar-separator';
import { DocsTooltipProvider } from '@/components/docs-tooltip-provider';
import { NotificationProvider } from '@/components/ui/notification-provider';
import { Toaster } from '@/components/ui/toast';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        components: {
          Separator: SidebarSeparator,
          Folder: DocsSidebarFolder,
        },
      }}
    >
      {children}
      <DocsTooltipProvider />
      <NotificationProvider />
      <Toaster />
    </DocsLayout>
  );
}
