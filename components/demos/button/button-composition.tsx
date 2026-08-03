import * as React from 'react';
import { ArrowRight } from 'lucide-react';

import * as ButtonPrimitive from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from '@/utils/tv';

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    startIcon?: React.ElementType;
    endIcon?: React.ElementType;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startIcon, endIcon, ...rest }, forwardedRef) => {
    return (
      <ButtonPrimitive.Root ref={forwardedRef} {...rest}>
        {startIcon ? <ButtonPrimitive.Icon as={startIcon} /> : null}
        {children}
        {endIcon ? <ButtonPrimitive.Icon as={endIcon} /> : null}
      </ButtonPrimitive.Root>
    );
  },
);
Button.displayName = 'Button';

export default function ButtonComposition() {
  return <Button endIcon={ArrowRight}>Button</Button>;
}

export const code = `import * as React from 'react';
import { ArrowRight } from 'lucide-react';

import * as ButtonPrimitive from '@/components/ui/button';
import type { VariantProps } from '@/utils/tv';
import { buttonVariants } from '@/components/ui/button';

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    startIcon?: React.ElementType;
    endIcon?: React.ElementType;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startIcon, endIcon, ...rest }, forwardedRef) => {
    return (
      <ButtonPrimitive.Root ref={forwardedRef} {...rest}>
        {startIcon ? <ButtonPrimitive.Icon as={startIcon} /> : null}
        {children}
        {endIcon ? <ButtonPrimitive.Icon as={endIcon} /> : null}
      </ButtonPrimitive.Root>
    );
  },
);
Button.displayName = 'Button';

export default function ButtonComposition() {
  return <Button endIcon={ArrowRight}>Button</Button>;
}`;
