import Image from 'next/image';

import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarAsNextImage() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image asChild>
        <Image src={AVATAR_IMAGES[0]} alt="" width={80} height={80} />
      </Avatar.Image>
    </Avatar.Root>
  );
}

export const code = `import Image from 'next/image';

import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarAsNextImage() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image asChild>
        <Image src={AVATAR_IMAGES[0]} alt="" width={80} height={80} />
      </Avatar.Image>
    </Avatar.Root>
  );
}`;
