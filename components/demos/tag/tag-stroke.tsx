import { RiPriceTag3Line, RiUserLine } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export default function TagStroke() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root>
        <Tag.Icon as={RiPriceTag3Line} />
        Tag
      </Tag.Root>
      <Tag.Root>
        <Tag.Icon as={RiUserLine} />
        Customer
      </Tag.Root>
    </div>
  );
}

export const code = `import { RiPriceTag3Line, RiUserLine } from '@remixicon/react';

import * as Tag from '@/components/ui/tag';

export default function TagStroke() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root>
        <Tag.Icon as={RiPriceTag3Line} />
        Tag
      </Tag.Root>
      <Tag.Root>
        <Tag.Icon as={RiUserLine} />
        Customer
      </Tag.Root>
    </div>
  );
}`;
