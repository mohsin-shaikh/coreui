import type { Metadata } from 'next';
import Link from 'next/link';

import { RiArrowRightLine } from '@remixicon/react';

import { DocsDashedSeparator } from '@/components/docs-page-header';
import * as FancyButton from '@/components/ui/fancy-button';
import { appName } from '@/lib/shared';

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
      <div>
        <span className="bg-bg-weak-25 text-ln-label-xs text-ln-gray-600 shadow-docs-badge-gray inline-flex h-7 items-center rounded-lg px-2">
          v0.1
        </span>
      </div>

      <h1 className="text-ln-title-h4 text-ln-gray-900 md:text-ln-title-h3 mt-5">
        {appName}
      </h1>

      <p className="text-ln-paragraph-md text-ln-gray-600 md:text-ln-paragraph-lg mt-4">
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

      <DocsDashedSeparator className="mt-12" />

      <ul className="text-ln-paragraph-sm text-ln-gray-500 mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
