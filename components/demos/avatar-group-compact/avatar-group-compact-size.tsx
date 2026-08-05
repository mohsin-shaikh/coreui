import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

const sizes = [
  { root: '40', avatar: '32' },
  { root: '32', avatar: '24' },
  { root: '24', avatar: '20' },
] as const;

export default function AvatarGroupCompactSize() {
  return (
    <div className="flex flex-col items-center gap-4">
      {sizes.map(({ root, avatar }) => (
        <AvatarGroupCompact.Root key={root} size={root}>
          <AvatarGroupCompact.Stack>
            <Avatar.Root size={avatar}>
              <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
            </Avatar.Root>
            <Avatar.Root size={avatar}>
              <Avatar.Image src={AVATAR_IMAGES[1]} alt="" />
            </Avatar.Root>
            <Avatar.Root size={avatar}>
              <Avatar.Image src={AVATAR_IMAGES[2]} alt="" />
            </Avatar.Root>
          </AvatarGroupCompact.Stack>
          <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
        </AvatarGroupCompact.Root>
      ))}
    </div>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarGroupCompactSize() {
  return (
    <div className="flex flex-col items-center gap-4">
      <AvatarGroupCompact.Root size="40">
        <AvatarGroupCompact.Stack>
          <Avatar.Root size="32">
            <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
          </Avatar.Root>
          <Avatar.Root size="32">
            <Avatar.Image src={AVATAR_IMAGES[1]} alt="" />
          </Avatar.Root>
          <Avatar.Root size="32">
            <Avatar.Image src={AVATAR_IMAGES[2]} alt="" />
          </Avatar.Root>
        </AvatarGroupCompact.Stack>
        <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
      </AvatarGroupCompact.Root>
      <AvatarGroupCompact.Root size="32">
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
      <AvatarGroupCompact.Root size="24">
        <AvatarGroupCompact.Stack>
          <Avatar.Root size="20">
            <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
          </Avatar.Root>
          <Avatar.Root size="20">
            <Avatar.Image src={AVATAR_IMAGES[1]} alt="" />
          </Avatar.Root>
          <Avatar.Root size="20">
            <Avatar.Image src={AVATAR_IMAGES[2]} alt="" />
          </Avatar.Root>
        </AvatarGroupCompact.Stack>
        <AvatarGroupCompact.Overflow>+9</AvatarGroupCompact.Overflow>
      </AvatarGroupCompact.Root>
    </div>
  );
}`;
