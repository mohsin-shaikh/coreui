import { RiErrorWarningFill } from '@remixicon/react';

import { BannerExample } from './banner-example';

export default function BannerError() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="error" icon={RiErrorWarningFill} />
      <BannerExample variant="light" status="error" icon={RiErrorWarningFill} />
      <BannerExample
        variant="lighter"
        status="error"
        icon={RiErrorWarningFill}
      />
      <BannerExample variant="stroke" status="error" icon={RiErrorWarningFill} />
    </div>
  );
}

export const code = `import { RiErrorWarningFill } from '@remixicon/react';

import { BannerExample } from '@/components/demos/banner/banner-example';

export default function BannerError() {
  return (
    <div className="flex w-full flex-col gap-2">
      <BannerExample variant="filled" status="error" icon={RiErrorWarningFill} />
      <BannerExample variant="light" status="error" icon={RiErrorWarningFill} />
      <BannerExample
        variant="lighter"
        status="error"
        icon={RiErrorWarningFill}
      />
      <BannerExample variant="stroke" status="error" icon={RiErrorWarningFill} />
    </div>
  );
}`;
