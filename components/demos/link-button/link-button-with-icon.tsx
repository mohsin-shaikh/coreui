import { RiArrowRightLine } from '@remixicon/react';

import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonWithIcon() {
  return (
    <LinkButton.Root>
      Link Button
      <LinkButton.Icon as={RiArrowRightLine} />
    </LinkButton.Root>
  );
}

export const code = `import { RiArrowRightLine } from '@remixicon/react';

import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonWithIcon() {
  return (
    <LinkButton.Root>
      Link Button
      <LinkButton.Icon as={RiArrowRightLine} />
    </LinkButton.Root>
  );
}`;
