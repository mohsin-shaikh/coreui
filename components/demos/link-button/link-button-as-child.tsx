import Link from 'next/link';

import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonAsChild() {
  return (
    <LinkButton.Root asChild>
      <Link href="#">Link Button</Link>
    </LinkButton.Root>
  );
}

export const code = `import Link from 'next/link';

import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonAsChild() {
  return (
    <LinkButton.Root asChild>
      <Link href="#">Link Button</Link>
    </LinkButton.Root>
  );
}`;
