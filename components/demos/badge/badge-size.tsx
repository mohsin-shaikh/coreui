import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeSize() {
  return (
    <BadgeDemoGrid>
      <Badge.Root size="small">Badge</Badge.Root>
      <Badge.Root size="medium">Badge</Badge.Root>
    </BadgeDemoGrid>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

import { BadgeDemoGrid } from './badge-demo-grid';

export default function BadgeSize() {
  return (
    <BadgeDemoGrid>
      <Badge.Root size="small">Badge</Badge.Root>
      <Badge.Root size="medium">Badge</Badge.Root>
    </BadgeDemoGrid>
  );
}`;
