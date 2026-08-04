import { RiArrowRightLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';

export default function ButtonWithIcon() {
  return (
    <Button.Root>
      Button
      <Button.Icon as={RiArrowRightLine} />
    </Button.Root>
  );
}

export const code = `import { RiArrowRightLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';

export default function ButtonWithIcon() {
  return (
    <Button.Root>
      Button
      <Button.Icon as={RiArrowRightLine} />
    </Button.Root>
  );
}`;
