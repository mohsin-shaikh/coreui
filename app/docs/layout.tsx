import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsSidebarFolder } from '@/components/docs-sidebar-folder';
import { SidebarSeparator } from '@/components/sidebar-separator';
import { NotificationProvider } from '@/components/ui/notification-provider';

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
      <NotificationProvider />
    </DocsLayout>
  );
}
