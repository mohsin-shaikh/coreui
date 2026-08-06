import Image from 'next/image';

import * as Tag from '@/components/ui/tag';
import { BRAND_LOGO } from '@/components/demos/shared/avatar-images';

const FIGMA_LOGO =
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=48&h=48&fit=crop';

export default function TagWithImage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root>
        <Tag.Icon as={Image} src={BRAND_LOGO} alt="Apex" width={16} height={16} />
        Apex
      </Tag.Root>
      <Tag.Root>
        <Tag.Icon as={Image} src={FIGMA_LOGO} alt="Figma" width={16} height={16} />
        Figma
      </Tag.Root>
    </div>
  );
}

export const code = `import Image from 'next/image';

import * as Tag from '@/components/ui/tag';

const APEX_LOGO =
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=48&h=48&fit=crop';
const FIGMA_LOGO =
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=48&h=48&fit=crop';

export default function TagWithImage() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tag.Root>
        <Tag.Icon as={Image} src={APEX_LOGO} alt="Apex" width={16} height={16} />
        Apex
      </Tag.Root>
      <Tag.Root>
        <Tag.Icon as={Image} src={FIGMA_LOGO} alt="Figma" width={16} height={16} />
        Figma
      </Tag.Root>
    </div>
  );
}`;
