import type { DocsPageLink } from '@/components/docs-page-header';

/** Dependency / external badges shown under the page description. */
export const docsPageLinks: Record<string, DocsPageLink[]> = {
  '/docs/v0.1/ui/button': [
    {
      label: '@radix-ui/react-slot',
      href: 'https://www.radix-ui.com/primitives/docs/utilities/slot',
    },
  ],
  '/docs/v0.1/ui/toast': [
    { label: 'sonner', href: 'https://sonner.emilkowal.ski' },
  ],
  '/docs/v0.1/ui/tooltip': [
    {
      label: '@radix-ui/react-tooltip',
      href: 'https://www.radix-ui.com/primitives/docs/components/tooltip',
    },
  ],
  '/docs/v0.1/ui/checkbox': [
    {
      label: '@radix-ui/react-checkbox',
      href: 'https://www.radix-ui.com/primitives/docs/components/checkbox',
    },
  ],
  '/docs/v0.1/ui/color-picker': [
    {
      label: 'react-aria-components',
      href: 'https://react-spectrum.adobe.com/react-aria/components.html',
    },
  ],
  '/docs/v0.1/ui/datepicker': [
    {
      label: 'react-day-picker',
      href: 'https://react-day-picker.js.org',
    },
  ],
  '/docs/v0.1/ui/digit-input': [
    {
      label: 'react-otp-input',
      href: 'https://github.com/devfolioco/react-otp-input',
    },
  ],
  '/docs/v0.1/utils/cn': [
    { label: 'clsx', href: 'https://github.com/lukeed/clsx' },
    { label: 'tailwind-merge', href: 'https://github.com/dcastil/tailwind-merge' },
  ],
  '/docs/v0.1/utils/tv': [
    { label: 'tailwind-variants', href: 'https://www.tailwind-variants.org' },
  ],
};
