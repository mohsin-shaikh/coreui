import {
  RiGalleryLine,
  RiLayoutGridLine,
  RiListUnordered,
} from '@remixicon/react';

import * as ButtonGroup from '@/components/ui/button-group';

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiLayoutGridLine} />
        Grid view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiListUnordered} />
        List view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiGalleryLine} />
        Gallery view
      </ButtonGroup.Item>
    </ButtonGroup.Root>
  );
}

export const code = `import {
  RiGalleryLine,
  RiLayoutGridLine,
  RiListUnordered,
} from '@remixicon/react';

import * as ButtonGroup from '@/components/ui/button-group';

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiLayoutGridLine} />
        Grid view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiListUnordered} />
        List view
      </ButtonGroup.Item>
      <ButtonGroup.Item>
        <ButtonGroup.Icon as={RiGalleryLine} />
        Gallery view
      </ButtonGroup.Item>
    </ButtonGroup.Root>
  );
}`;
