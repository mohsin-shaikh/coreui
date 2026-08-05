import Link from 'next/link';
import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonAsChild() {
  return (
    <CompactButton.Root asChild>
      <Link href="#">
        <CompactButton.Icon as={RiAddLine} />
      </Link>
    </CompactButton.Root>
  );
}

export const code = `import Link from 'next/link';
import { RiAddLine } from '@remixicon/react';

import * as CompactButton from '@/components/ui/compact-button';

export default function CompactButtonAsChild() {
  return (
    <CompactButton.Root asChild>
      <Link href="#">
        <CompactButton.Icon as={RiAddLine} />
      </Link>
    </CompactButton.Root>
  );
}`;
