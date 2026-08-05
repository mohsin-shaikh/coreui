import * as React from 'react';
import Link from 'fumadocs-core/link';

import { cn } from '@/lib/cn';

/**
 * Framework logomarks for the installation index. Gradient ids are namespaced
 * per logo because SVG defs share one document-wide scope.
 */
const logos = {
  nextjs: (
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <mask
        id="framework-nextjs-mask"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#framework-nextjs-mask)">
        <circle cx="90" cy="90" r="87" fill="black" stroke="white" strokeWidth="6" />
        <path
          d="M149.508 157.52 69.142 54H54v71.97h12.114V69.384l73.885 95.461a90 90 0 0 0 9.509-7.325"
          fill="url(#framework-nextjs-a)"
        />
        <path fill="url(#framework-nextjs-b)" d="M115 54h12v72h-12z" />
      </g>
      <defs>
        <linearGradient
          id="framework-nextjs-a"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="framework-nextjs-b"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
} satisfies Record<string, React.ReactNode>;

export function FrameworkCards({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'not-prose mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 md:mt-5',
        className,
      )}
      {...props}
    />
  );
}

export function FrameworkCard({
  name,
  href,
  logo,
  className,
}: {
  name: string;
  href: string;
  logo: keyof typeof logos;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center justify-center gap-4 rounded-20 border border-ln-gray-100 px-6 py-8',
        'transition-colors hover:border-ln-gray-200 hover:bg-ln-gray-25',
        className,
      )}
    >
      <span className="size-12 [&_svg]:size-full">{logos[logo]}</span>
      <span className="text-ln-label-sm text-ln-gray-900 md:text-ln-label-md">
        {name}
      </span>
    </Link>
  );
}
