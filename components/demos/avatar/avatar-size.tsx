import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarSize() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar.Root size="80">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="72">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="64">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="56">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="48">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="40">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="32">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="24">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="20">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
    </div>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarSize() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar.Root size="80">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="72">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="64">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="56">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="48">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="40">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="32">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="24">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
      <Avatar.Root size="20">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Avatar.Root>
    </div>
  );
}`;
