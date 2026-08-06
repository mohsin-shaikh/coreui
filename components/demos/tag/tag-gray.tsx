import { RiPriceTag3Line, RiUserLine } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export default function TagGray() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root variant="gray">
        <Tag.Icon as={RiPriceTag3Line} />
        Tag
      </Tag.Root>
      <Tag.Root variant="gray">
        <Tag.Icon as={RiUserLine} />
        Customer
      </Tag.Root>
    </div>
  );
}

export const code = `import { RiPriceTag3Line, RiUserLine } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export default function TagGray() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root variant="gray">
        <Tag.Icon as={RiPriceTag3Line} />
        Tag
      </Tag.Root>
      <Tag.Root variant="gray">
        <Tag.Icon as={RiUserLine} />
        Customer
      </Tag.Root>
    </div>
  );
}`;
