import {
  RiGalleryLine,
  RiLayoutGridLine,
  RiListUnordered,
} from '@remixicon/react';

import * as ButtonGroup from '@/components/ui/button-group';

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup.Root size="small">
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
      <ButtonGroup.Root size="xsmall">
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
      <ButtonGroup.Root size="xxsmall">
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
    </div>
  );
}

export const code = `import {
  RiGalleryLine,
  RiLayoutGridLine,
  RiListUnordered,
} from '@remixicon/react';

import * as ButtonGroup from '@/components/ui/button-group';

export default function ButtonGroupSize() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ButtonGroup.Root size="small">
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
      <ButtonGroup.Root size="xsmall">
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
      <ButtonGroup.Root size="xxsmall">
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
    </div>
  );
}`;
