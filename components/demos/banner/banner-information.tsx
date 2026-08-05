import { RiInformationFill } from '@remixicon/react';

import { BannerExample } from './banner-example';

export default function BannerInformation() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample
        variant="filled"
        status="information"
        icon={RiInformationFill}
      />
      <BannerExample
        variant="light"
        status="information"
        icon={RiInformationFill}
      />
      <BannerExample
        variant="lighter"
        status="information"
        icon={RiInformationFill}
      />
      <BannerExample
        variant="stroke"
        status="information"
        icon={RiInformationFill}
      />
    </div>
  );
}

export const code = `import { RiInformationFill } from '@remixicon/react';

import { BannerExample } from '@/components/demos/banner/banner-example';

export default function BannerInformation() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample
        variant="filled"
        status="information"
        icon={RiInformationFill}
      />
      <BannerExample
        variant="light"
        status="information"
        icon={RiInformationFill}
      />
      <BannerExample
        variant="lighter"
        status="information"
        icon={RiInformationFill}
      />
      <BannerExample
        variant="stroke"
        status="information"
        icon={RiInformationFill}
      />
    </div>
  );
}`;
