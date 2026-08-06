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
  '/docs/v0.1/utils/cn': [
    { label: 'clsx', href: 'https://github.com/lukeed/clsx' },
    { label: 'tailwind-merge', href: 'https://github.com/dcastil/tailwind-merge' },
  ],
  '/docs/v0.1/utils/tv': [
    { label: 'tailwind-variants', href: 'https://www.tailwind-variants.org' },
  ],
};
