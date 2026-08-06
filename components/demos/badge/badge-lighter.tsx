import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeLighter() {
  return (
    <BadgeDemoGrid>
      <Badge.Root variant="lighter" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="green">
        Badge
      </Badge.Root>
    </BadgeDemoGrid>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeLighter() {
  return (
    <BadgeDemoGrid>
      <Badge.Root variant="lighter" color="gray">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="blue">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="orange">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="red">
        Badge
      </Badge.Root>
      <Badge.Root variant="lighter" color="green">
        Badge
      </Badge.Root>
    </BadgeDemoGrid>
  );
}`;
