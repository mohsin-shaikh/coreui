import { RiAlertFill } from '@remixicon/react';

import { BannerExample } from './banner-example';

export default function BannerWarning() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="warning" icon={RiAlertFill} />
      <BannerExample variant="light" status="warning" icon={RiAlertFill} />
      <BannerExample variant="lighter" status="warning" icon={RiAlertFill} />
      <BannerExample variant="stroke" status="warning" icon={RiAlertFill} />
    </div>
  );
}

export const code = `import { RiAlertFill } from '@remixicon/react';

import { BannerExample } from '@/components/demos/banner/banner-example';

export default function BannerWarning() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="warning" icon={RiAlertFill} />
      <BannerExample variant="light" status="warning" icon={RiAlertFill} />
      <BannerExample variant="lighter" status="warning" icon={RiAlertFill} />
      <BannerExample variant="stroke" status="warning" icon={RiAlertFill} />
    </div>
  );
}`;
