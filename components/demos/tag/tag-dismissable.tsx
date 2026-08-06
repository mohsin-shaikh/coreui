import { RiPriceTag3Line, RiUserLine } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export default function TagDismissable() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root>
        <Tag.Icon as={RiPriceTag3Line} />
        Tag
        <Tag.DismissButton aria-label="Remove tag" />
      </Tag.Root>
      <Tag.Root variant="gray">
        <Tag.Icon as={RiUserLine} />
        Customer
        <Tag.DismissButton aria-label="Remove tag" />
      </Tag.Root>
    </div>
  );
}

export const code = `import { RiPriceTag3Line, RiUserLine } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export default function TagDismissable() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root>
        <Tag.Icon as={RiPriceTag3Line} />
        Tag
        <Tag.DismissButton aria-label="Remove tag" />
      </Tag.Root>
      <Tag.Root variant="gray">
        <Tag.Icon as={RiUserLine} />
        Customer
        <Tag.DismissButton aria-label="Remove tag" />
      </Tag.Root>
    </div>
  );
}`;
