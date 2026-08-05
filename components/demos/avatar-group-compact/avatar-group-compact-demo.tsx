import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarGroupCompactDemo() {
  return (
    <AvatarGroupCompact.Root>
      <AvatarGroupCompact.Stack>
        <Avatar.Root size="24">
          <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
        </Avatar.Root>
        <Avatar.Root size="24">
          <Avatar.Image src={AVATAR_IMAGES[1]} alt="" />
        </Avatar.Root>
        <Avatar.Root size="24">
          <Avatar.Image src={AVATAR_IMAGES[2]} alt="" />
        </Avatar.Root>
      </AvatarGroupCompact.Stack>
      <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
    </AvatarGroupCompact.Root>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarGroupCompactDemo() {
  return (
    <AvatarGroupCompact.Root>
      <AvatarGroupCompact.Stack>
        <Avatar.Root size="24">
          <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
        </Avatar.Root>
        <Avatar.Root size="24">
          <Avatar.Image src={AVATAR_IMAGES[1]} alt="" />
        </Avatar.Root>
        <Avatar.Root size="24">
          <Avatar.Image src={AVATAR_IMAGES[2]} alt="" />
        </Avatar.Root>
      </AvatarGroupCompact.Stack>
      <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
    </AvatarGroupCompact.Root>
  );
}`;
