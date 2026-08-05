import Link from 'next/link';

import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarAsLink() {
  return (
    <Avatar.Root asChild>
      <Link href="#">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Link>
    </Avatar.Root>
  );
}

export const code = `import Link from 'next/link';

import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarAsLink() {
  return (
    <Avatar.Root asChild>
      <Link href="#">
        <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      </Link>
    </Avatar.Root>
  );
}`;
