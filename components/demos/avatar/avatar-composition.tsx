import * as React from 'react';

import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';
import * as AvatarPrimitive from '@/components/ui/avatar';
import { avatarVariants } from '@/components/ui/avatar';
import type { VariantProps } from '@/utils/tv';

type AvatarProps = VariantProps<typeof avatarVariants> &
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
    src?: string;
    alt?: string;
  };

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, children, ...rest }, forwardedRef) => {
    return (
      <AvatarPrimitive.Root ref={forwardedRef} {...rest}>
        {src ? (
          <AvatarPrimitive.Image src={src} alt={alt} />
        ) : (
          children
        )}
      </AvatarPrimitive.Root>
    );
  },
);
Avatar.displayName = 'Avatar';

export default function AvatarComposition() {
  return <Avatar src={AVATAR_IMAGES[0]} alt="" size="80" />;
}

export const code = `import * as React from 'react';

import { AVATAR_IMAGES } from '@/components/demos/shared/avatar-images';
import * as AvatarPrimitive from '@/components/ui/avatar';
import { avatarVariants } from '@/components/ui/avatar';
import type { VariantProps } from '@/utils/tv';

type AvatarProps = VariantProps<typeof avatarVariants> &
  React.HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean;
    src?: string;
    alt?: string;
  };

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, children, ...rest }, forwardedRef) => {
    return (
      <AvatarPrimitive.Root ref={forwardedRef} {...rest}>
        {src ? (
          <AvatarPrimitive.Image src={src} alt={alt} />
        ) : (
          children
        )}
      </AvatarPrimitive.Root>
    );
  },
);
Avatar.displayName = 'Avatar';

export default function AvatarComposition() {
  return <Avatar src={AVATAR_IMAGES[0]} alt="" size="80" />;
}`;
