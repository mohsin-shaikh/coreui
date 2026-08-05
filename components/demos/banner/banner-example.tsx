import type { ElementType } from 'react';
import { RiCloseLine } from '@remixicon/react';

import * as Banner from '@/components/ui/banner';
import { bannerVariants } from '@/components/ui/banner';
import * as LinkButton from '@/components/ui/link-button';
import type { VariantProps } from '@/utils/tv';

type BannerExampleProps = {
  variant: NonNullable<VariantProps<typeof bannerVariants>['variant']>;
  status: NonNullable<VariantProps<typeof bannerVariants>['status']>;
  icon: ElementType;
};

export function BannerExample({
  variant,
  status,
  icon: Icon,
}: BannerExampleProps) {
  const isFilled = variant === 'filled';

  return (
    <Banner.Root variant={variant} status={status}>
      <Banner.Content>
        <Banner.Icon as={Icon} />
        <span className="text-label-sm">Insert your alert title here!</span>
        <span className="text-paragraph-sm">∙</span>
        <span className="text-paragraph-sm">
          Insert your description here.
        </span>
        <LinkButton.Root
          variant={isFilled ? 'modifiable' : 'black'}
          size="small"
          underline
          className={isFilled ? 'text-static-white' : undefined}
        >
          Upgrade
        </LinkButton.Root>
      </Banner.Content>
      <Banner.CloseButton aria-label="Close">
        <RiCloseLine className="size-full" />
      </Banner.CloseButton>
    </Banner.Root>
  );
}
