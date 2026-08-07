import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { RiArrowRightLine } from '@remixicon/react';

import * as FancyButton from '@/components/ui/fancy-button';
import { appName, assetPath } from '@/lib/shared';

const description =
  'A copy-paste component library for React. Drop the source into your project and keep full control over it - no package to depend on, nothing to eject from.';

export const metadata: Metadata = {
  title: appName,
  description,
};

const stack = [
  'Radix UI primitives',
  'Tailwind CSS',
  'TypeScript',
  'Accessible by default',
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-16 text-center">
      <div className="flex justify-center">
        <Image
          src={assetPath('/images/logo/coreui.svg')}
          alt=""
          width={48}
          height={48}
          className="size-12"
          unoptimized
          priority
        />
      </div>

      <div className="mt-5">
        <span className="bg-fd-secondary text-fd-muted-foreground inline-flex h-7 items-center rounded-lg border border-fd-border px-2 text-xs font-medium">
          v0.1
        </span>
      </div>

      <h1 className="text-fd-foreground mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
        {appName}
      </h1>

      <p className="text-fd-muted-foreground mt-4 text-base md:text-lg">
        {description}
      </p>

      <div className="mt-8 flex justify-center">
        <FancyButton.Root asChild>
          <Link href="/docs/v0.1/introduction">
            Get started
            <FancyButton.Icon as={RiArrowRightLine} />
          </Link>
        </FancyButton.Root>
      </div>

      <hr className="border-fd-border mt-12" />

      <ul className="text-fd-muted-foreground mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
