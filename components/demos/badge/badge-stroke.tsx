import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeStroke() {
  return (
    <BadgeDemoGrid>
      <Badge.Root variant="stroke" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="green">
        Badge
      </Badge.Root>
    </BadgeDemoGrid>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeStroke() {
  return (
    <BadgeDemoGrid>
      <Badge.Root variant="stroke" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="stroke" color="green">
        Badge
      </Badge.Root>
    </BadgeDemoGrid>
  );
}`;
