import * as React from 'react';
import { RiArrowRightLine } from '@remixicon/react';

import * as FancyButtonPrimitive from '@/components/ui/fancy-button';
import { fancyButtonVariants } from '@/components/ui/fancy-button';
import type { VariantProps } from '@/utils/tv';

type FancyButtonProps = VariantProps<typeof fancyButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    endIcon?: React.ElementType;
  };

const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>(
  ({ children, endIcon, ...rest }, forwardedRef) => {
    return (
      <FancyButtonPrimitive.Root ref={forwardedRef} {...rest}>
        {children}
        {endIcon ? <FancyButtonPrimitive.Icon as={endIcon} /> : null}
      </FancyButtonPrimitive.Root>
    );
  },
);
FancyButton.displayName = 'FancyButton';

export default function FancyButtonComposition() {
  return <FancyButton endIcon={RiArrowRightLine}>Button</FancyButton>;
}

export const code = `import * as React from 'react';
import { RiArrowRightLine } from '@remixicon/react';

import * as FancyButtonPrimitive from '@/components/ui/fancy-button';
import { fancyButtonVariants } from '@/components/ui/fancy-button';
import type { VariantProps } from '@/utils/tv';

type FancyButtonProps = VariantProps<typeof fancyButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    endIcon?: React.ElementType;
  };

const FancyButton = React.forwardRef<HTMLButtonElement, FancyButtonProps>(
  ({ children, endIcon, ...rest }, forwardedRef) => {
    return (
      <FancyButtonPrimitive.Root ref={forwardedRef} {...rest}>
        {children}
        {endIcon ? <FancyButtonPrimitive.Icon as={endIcon} /> : null}
      </FancyButtonPrimitive.Root>
    );
  },
);
FancyButton.displayName = 'FancyButton';

export default function FancyButtonComposition() {
  return <FancyButton endIcon={RiArrowRightLine}>Button</FancyButton>;
}`;
