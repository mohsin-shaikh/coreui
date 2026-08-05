import * as Badge from '@/components/ui/badge';

export default function BadgeAsChild() {
  return (
    <Badge.Root asChild>
      <span>Badge</span>
    </Badge.Root>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

export default function BadgeAsChild() {
  return (
    <Badge.Root asChild>
      <span>Badge</span>
    </Badge.Root>
  );
}`;
