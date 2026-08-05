import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarDemo() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
    </Avatar.Root>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarDemo() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
    </Avatar.Root>
  );
}`;
