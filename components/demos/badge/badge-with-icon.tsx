import { RiStarFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';

export default function BadgeWithIcon() {
  return (
    <Badge.Root>
      Badge
      <Badge.Icon as={RiStarFill} />
    </Badge.Root>
  );
}

export const code = `import { RiStarFill } from '@remixicon/react';

import * as Badge from '@/components/ui/badge';

export default function BadgeWithIcon() {
  return (
    <Badge.Root>
      Badge
      <Badge.Icon as={RiStarFill} />
    </Badge.Root>
  );
}`;
