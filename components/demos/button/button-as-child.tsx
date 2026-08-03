import Link from 'next/link';

import * as Button from '@/components/ui/button';

export default function ButtonAsChild() {
  return (
    <Button.Root asChild variant="neutral" mode="stroke">
      <Link href="#">As link</Link>
    </Button.Root>
  );
}

export const code = `import Link from 'next/link';

import * as Button from '@/components/ui/button';

export default function ButtonAsChild() {
  return (
    <Button.Root asChild variant="neutral" mode="stroke">
      <Link href="#">As link</Link>
    </Button.Root>
  );
}`;
