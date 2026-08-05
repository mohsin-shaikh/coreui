import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroup from '@/components/ui/avatar-group';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

const sizes = ['80', '72', '64', '56', '48', '40', '32', '24', '20'] as const;

export default function AvatarGroupSize() {
  return (
    <div className="flex flex-col items-center gap-4">
      {sizes.map((size) => (
        <AvatarGroup.Root key={size} size={size}>
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
      ))}
    </div>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import * as AvatarGroup from '@/components/ui/avatar-group';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarGroupSize() {
  return (
    <div className="flex flex-col items-center gap-4">
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
      <AvatarGroup.Root size="72">
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
      <AvatarGroup.Root size="64">
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
      <AvatarGroup.Root size="56">
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
      <AvatarGroup.Root size="48">
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
      <AvatarGroup.Root size="40">
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
      <AvatarGroup.Root size="32">
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
      <AvatarGroup.Root size="24">
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
      <AvatarGroup.Root size="20">
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
    </div>
  );
}`;
