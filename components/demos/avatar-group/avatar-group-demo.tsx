import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroup from '@/components/ui/avatar-group';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup.Root size="80">
      <Avatar.Root>
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src={AVATAR_IMAGES[1]} alt="" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src={AVATAR_IMAGES[2]} alt="" />
      </Avatar.Root>
      <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
    </AvatarGroup.Root>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroup from '@/components/ui/avatar-group';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup.Root size="80">
      <Avatar.Root>
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src={AVATAR_IMAGES[1]} alt="" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image src={AVATAR_IMAGES[2]} alt="" />
      </Avatar.Root>
      <AvatarGroup.Overflow>+9</AvatarGroup.Overflow>
    </AvatarGroup.Root>
  );
}`;
