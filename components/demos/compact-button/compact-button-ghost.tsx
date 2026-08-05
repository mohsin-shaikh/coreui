import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonGhost() {
  return (
    <CompactButton.Root variant="ghost">
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}

export const code = `import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonGhost() {
  return (
    <CompactButton.Root variant="ghost">
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}`;
