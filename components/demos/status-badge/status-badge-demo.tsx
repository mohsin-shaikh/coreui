import * as StatusBadge from '@/components/ui/status-badge';

export default function StatusBadgeDemo() {
  return (
    <StatusBadge.Root>
      <StatusBadge.Dot />
      Badge
    </StatusBadge.Root>
  );
}

export const code = `import * as StatusBadge from '@/components/ui/status-badge';

export default function StatusBadgeDemo() {
  return (
    <StatusBadge.Root>
      <StatusBadge.Dot />
      Badge
    </StatusBadge.Root>
  );
}`;
