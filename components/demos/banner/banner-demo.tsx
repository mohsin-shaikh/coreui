import { RiCloseLine, RiSparklingFill } from '@remixicon/react';

import * as Banner from '@/components/ui/banner';
import * as LinkButton from '@/components/ui/link-button';

export default function BannerDemo() {
  return (
    <Banner.Root variant="filled" status="feature">
      <Banner.Content>
        <Banner.Icon as={RiSparklingFill} />
        <span className="text-label-sm">Insert your alert title here!</span>
        <span className="text-paragraph-sm">∙</span>
        <span className="text-paragraph-sm">
          Insert your description here.
        </span>
        <LinkButton.Root
          variant="modifiable"
          size="small"
          underline
          className="text-static-white"
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

export const code = `import { RiCloseLine, RiSparklingFill } from '@remixicon/react';

import * as Banner from '@/components/ui/banner';
import * as LinkButton from '@/components/ui/link-button';

export default function BannerDemo() {
  return (
    <Banner.Root variant="filled" status="feature">
      <Banner.Content>
        <Banner.Icon as={RiSparklingFill} />
        <span className="text-label-sm">Insert your alert title here!</span>
        <span className="text-paragraph-sm">∙</span>
        <span className="text-paragraph-sm">
          Insert your description here.
        </span>
        <LinkButton.Root
          variant="modifiable"
          size="small"
          underline
          className="text-static-white"
        >
          Upgrade
        </LinkButton.Root>
      </Banner.Content>
      <Banner.CloseButton aria-label="Close">
        <RiCloseLine className="size-full" />
      </Banner.CloseButton>
    </Banner.Root>
  );
}`;
