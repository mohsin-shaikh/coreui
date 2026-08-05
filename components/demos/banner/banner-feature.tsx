import { RiSparklingFill } from '@remixicon/react';

import { BannerExample } from './banner-example';

export default function BannerFeature() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="feature" icon={RiSparklingFill} />
      <BannerExample variant="light" status="feature" icon={RiSparklingFill} />
      <BannerExample variant="lighter" status="feature" icon={RiSparklingFill} />
      <BannerExample variant="stroke" status="feature" icon={RiSparklingFill} />
    </div>
  );
}

export const code = `import { RiSparklingFill } from '@remixicon/react';

import { BannerExample } from '@/components/demos/banner/banner-example';

export default function BannerFeature() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="feature" icon={RiSparklingFill} />
      <BannerExample variant="light" status="feature" icon={RiSparklingFill} />
      <BannerExample variant="lighter" status="feature" icon={RiSparklingFill} />
      <BannerExample variant="stroke" status="feature" icon={RiSparklingFill} />
    </div>
  );
}`;
