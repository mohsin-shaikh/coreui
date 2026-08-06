import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeLight() {
  return (
    <BadgeDemoGrid>
      <Badge.Root variant="light" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="green">
        Badge
      </Badge.Root>
    </BadgeDemoGrid>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeLight() {
  return (
    <BadgeDemoGrid>
      <Badge.Root variant="light" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="light" color="green">
        Badge
      </Badge.Root>
    </BadgeDemoGrid>
  );
}`;
