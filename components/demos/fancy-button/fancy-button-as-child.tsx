import Link from 'next/link';

import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonAsChild() {
  return (
    <FancyButton.Root asChild>
      <Link href="#">Button</Link>
    </FancyButton.Root>
  );
}

export const code = `import Link from 'next/link';

import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonAsChild() {
  return (
    <FancyButton.Root asChild>
      <Link href="#">Button</Link>
    </FancyButton.Root>
  );
}`;
