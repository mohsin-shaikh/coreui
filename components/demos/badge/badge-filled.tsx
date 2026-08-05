import * as Badge from '@/components/ui/badge';

export default function BadgeFilled() {
  return (
    <>
      <Badge.Root variant="filled" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="green">
        Badge
      </Badge.Root>
    </>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

export default function BadgeFilled() {
  return (
    <>
      <Badge.Root variant="filled" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="filled" color="green">
        Badge
      </Badge.Root>
    </>
  );
}`;
