import * as React from 'react';
import { RiAddLine } from '@remixicon/react';

import * as CompactButtonPrimitive from '@/components/ui/compact-button';
import { compactButtonVariants } from '@/components/ui/compact-button';
import type { VariantProps } from '@/utils/tv';

type CompactButtonProps = VariantProps<typeof compactButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    icon: React.ElementType;
  };

const CompactButton = React.forwardRef<HTMLButtonElement, CompactButtonProps>(
  ({ icon, ...rest }, forwardedRef) => {
    return (
      <CompactButtonPrimitive.Root ref={forwardedRef} {...rest}>
        <CompactButtonPrimitive.Icon as={icon} />
      </CompactButtonPrimitive.Root>
    );
  },
);
CompactButton.displayName = 'CompactButton';

export default function CompactButtonComposition() {
  return <CompactButton icon={RiAddLine} />;
}

export const code = `import * as React from 'react';
import { RiAddLine } from '@remixicon/react';

import * as CompactButtonPrimitive from '@/components/ui/compact-button';
import { compactButtonVariants } from '@/components/ui/compact-button';
import type { VariantProps } from '@/utils/tv';

type CompactButtonProps = VariantProps<typeof compactButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    icon: React.ElementType;
  };

const CompactButton = React.forwardRef<HTMLButtonElement, CompactButtonProps>(
  ({ icon, ...rest }, forwardedRef) => {
    return (
      <CompactButtonPrimitive.Root ref={forwardedRef} {...rest}>
        <CompactButtonPrimitive.Icon as={icon} />
      </CompactButtonPrimitive.Root>
    );
  },
);
CompactButton.displayName = 'CompactButton';

export default function CompactButtonComposition() {
  return <CompactButton icon={RiAddLine} />;
}`;
