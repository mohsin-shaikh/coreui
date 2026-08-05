import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonSize() {
  return (
    <>
      <CompactButton.Root size="large">
        <CompactButton.Icon as={RiAddLine} />
      </CompactButton.Root>
      <CompactButton.Root size="medium">
        <CompactButton.Icon as={RiAddLine} />
      </CompactButton.Root>
    </>
  );
}

export const code = `import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonSize() {
  return (
    <>
      <CompactButton.Root size="large">
        <CompactButton.Icon as={RiAddLine} />
      </CompactButton.Root>
      <CompactButton.Root size="medium">
        <CompactButton.Icon as={RiAddLine} />
      </CompactButton.Root>
    </>
  );
}`;
