import { RiCheckboxCircleFill } from '@remixicon/react';

import { BannerExample } from './banner-example';

export default function BannerSuccess() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="success" icon={RiCheckboxCircleFill} />
      <BannerExample variant="light" status="success" icon={RiCheckboxCircleFill} />
      <BannerExample
        variant="lighter"
        status="success"
        icon={RiCheckboxCircleFill}
      />
      <BannerExample
        variant="stroke"
        status="success"
        icon={RiCheckboxCircleFill}
      />
    </div>
  );
}

export const code = `import { RiCheckboxCircleFill } from '@remixicon/react';

import { BannerExample } from '@/components/demos/banner/banner-example';

export default function BannerSuccess() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="success" icon={RiCheckboxCircleFill} />
      <BannerExample variant="light" status="success" icon={RiCheckboxCircleFill} />
      <BannerExample
        variant="lighter"
        status="success"
        icon={RiCheckboxCircleFill}
      />
      <BannerExample
        variant="stroke"
        status="success"
        icon={RiCheckboxCircleFill}
      />
    </div>
  );
}`;
