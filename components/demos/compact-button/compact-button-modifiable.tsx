import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonModifiable() {
  return (
    <CompactButton.Root
      variant="modifiable"
      className="text-primary-base hover:bg-primary-alpha-10"
    >
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}

export const code = `import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonModifiable() {
  return (
    <CompactButton.Root
      variant="modifiable"
      className="text-primary-base hover:bg-primary-alpha-10"
    >
      <CompactButton.Icon as={RiAddLine} />
    </CompactButton.Root>
  );
}`;
