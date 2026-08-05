import { RiArrowRightLine } from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonWithIcon() {
  return (
    <FancyButton.Root>
      Button
      <FancyButton.Icon as={RiArrowRightLine} />
    </FancyButton.Root>
  );
}

export const code = `import { RiArrowRightLine } from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonWithIcon() {
  return (
    <FancyButton.Root>
      Button
      <FancyButton.Icon as={RiArrowRightLine} />
    </FancyButton.Root>
  );
}`;
