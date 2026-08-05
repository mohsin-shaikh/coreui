import * as Badge from '@/components/ui/badge';

export default function BadgeSize() {
  return (
    <>
      <Badge.Root size="small">Badge</Badge.Root>
      <Badge.Root size="medium">Badge</Badge.Root>
    </>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

export default function BadgeSize() {
  return (
    <>
      <Badge.Root size="small">Badge</Badge.Root>
      <Badge.Root size="medium">Badge</Badge.Root>
    </>
  );
}`;
