import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarIndicatorCustomSvg() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      <Avatar.Indicator>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="#1FC16B" />
          <path
            d="M4.5 8.25L6.75 10.5L11.5 5.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Avatar.Indicator>
    </Avatar.Root>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';

export default function AvatarIndicatorCustomSvg() {
  return (
    <Avatar.Root size="80">
      <Avatar.Image src={AVATAR_IMAGES[0]} alt="" />
      <Avatar.Indicator>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="8" fill="#1FC16B" />
          <path
            d="M4.5 8.25L6.75 10.5L11.5 5.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Avatar.Indicator>
    </Avatar.Root>
  );
}`;
