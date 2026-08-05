import * as Badge from '@/components/ui/badge';

export default function BadgeDisabled() {
  return (
    <>
      <Badge.Root disabled variant="filled">
        Badge
      </Badge.Root>
      <Badge.Root disabled variant="light">
        Badge
      </Badge.Root>
      <Badge.Root disabled variant="lighter">
        Badge
      </Badge.Root>
      <Badge.Root disabled variant="stroke">
        Badge
      </Badge.Root>
    </>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

export default function BadgeDisabled() {
  return (
    <>
      <Badge.Root disabled variant="filled">
        Badge
      </Badge.Root>
      <Badge.Root disabled variant="light">
        Badge
      </Badge.Root>
      <Badge.Root disabled variant="lighter">
        Badge
      </Badge.Root>
      <Badge.Root disabled variant="stroke">
        Badge
      </Badge.Root>
    </>
  );
}`;
