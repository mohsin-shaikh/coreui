import * as React from 'react';
import { RiArrowRightLine } from '@remixicon/react';

import * as LinkButtonPrimitive from '@/components/ui/link-button';
import { linkButtonVariants } from '@/components/ui/link-button';
import type { VariantProps } from '@/utils/tv';

type LinkButtonProps = VariantProps<typeof linkButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    endIcon?: React.ElementType;
  };

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ children, endIcon, ...rest }, forwardedRef) => {
    return (
      <LinkButtonPrimitive.Root ref={forwardedRef} {...rest}>
        {children}
        {endIcon ? <LinkButtonPrimitive.Icon as={endIcon} /> : null}
      </LinkButtonPrimitive.Root>
    );
  },
);
LinkButton.displayName = 'LinkButton';

export default function LinkButtonComposition() {
  return <LinkButton endIcon={RiArrowRightLine}>Link Button</LinkButton>;
}

export const code = `import * as React from 'react';
import { RiArrowRightLine } from '@remixicon/react';

import * as LinkButtonPrimitive from '@/components/ui/link-button';
import { linkButtonVariants } from '@/components/ui/link-button';
import type { VariantProps } from '@/utils/tv';

type LinkButtonProps = VariantProps<typeof linkButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    endIcon?: React.ElementType;
  };

const LinkButton = React.forwardRef<HTMLButtonElement, LinkButtonProps>(
  ({ children, endIcon, ...rest }, forwardedRef) => {
    return (
      <LinkButtonPrimitive.Root ref={forwardedRef} {...rest}>
        {children}
        {endIcon ? <LinkButtonPrimitive.Icon as={endIcon} /> : null}
      </LinkButtonPrimitive.Root>
    );
  },
);
LinkButton.displayName = 'LinkButton';

export default function LinkButtonComposition() {
  return <LinkButton endIcon={RiArrowRightLine}>Link Button</LinkButton>;
}`;
