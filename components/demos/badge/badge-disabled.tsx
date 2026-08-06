import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeDisabled() {
  return (
    <BadgeDemoGrid>
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
    </BadgeDemoGrid>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeDisabled() {
  return (
    <BadgeDemoGrid>
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
    </BadgeDemoGrid>
  );
}`;
