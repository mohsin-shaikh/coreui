import * as StatusBadge from '@/components/ui/status-badge';

export default function StatusBadgeAsChild() {
  return (
    <StatusBadge.Root asChild status="completed">
      <span>Badge</span>
    </StatusBadge.Root>
  );
}

export const code = `import * as StatusBadge from '@/components/ui/status-badge';

export default function StatusBadgeAsChild() {
  return (
    <StatusBadge.Root asChild status="completed">
      <span>Badge</span>
    </StatusBadge.Root>
  );
}`;
