import * as Avatar from '@/components/ui/avatar';
import * as Tag from '@/components/ui/tag';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function TagWithAvatar() {
  return (
    <Tag.Root>
      <Tag.Icon as={Avatar.Root} size="20">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="James Brown" />
      </Tag.Icon>
      James Brown
    </Tag.Root>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import * as Tag from '@/components/ui/tag';

const AVATAR_IMAGE =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=face';

export default function TagWithAvatar() {
  return (
    <Tag.Root>
      <Tag.Icon as={Avatar.Root} size="20">
        <Avatar.Image src={AVATAR_IMAGE} alt="James Brown" />
      </Tag.Icon>
      James Brown
    </Tag.Root>
  );
}`;
