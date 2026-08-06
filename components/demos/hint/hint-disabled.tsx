import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';

export default function HintDisabled() {
  return (
    <Hint.Root disabled>
      <Hint.Icon as={RiInformationFill} />
      This is a hint text to help user.
    </Hint.Root>
  );
}

export const code = `import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';

export function HintDisabled() {
  return (
    <Hint.Root disabled>
      <Hint.Icon as={RiInformationFill} />
      This is a hint text to help user.
    </Hint.Root>
  );
}`;
