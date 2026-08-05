import * as Avatar from '@/components/ui/avatar';
import {
  AVATAR_IMAGES,
  BRAND_LOGO,
} from '@/components/demos/shared/avatar-images';

export default function AvatarBrandLogo() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      <Avatar.Indicator>
        <Avatar.BrandLogo src={BRAND_LOGO} alt="" />
      </Avatar.Indicator>
    </Avatar.Root>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import {
  AVATAR_IMAGES,
  BRAND_LOGO,
} from '@/components/demos/shared/avatar-images';

export default function AvatarBrandLogo() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      <Avatar.Indicator>
        <Avatar.BrandLogo src={BRAND_LOGO} alt="" />
      </Avatar.Indicator>
    </Avatar.Root>
  );
}`;
