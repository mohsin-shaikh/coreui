import type { DocsPageLink } from '@/components/docs-page-header';

/** Dependency / external badges shown under the page description. */
export const docsPageLinks: Record<string, DocsPageLink[]> = {
  '/docs/v0.1/ui/button': [
    {
      label: '@radix-ui/react-slot',
      href: 'https://www.radix-ui.com/primitives/docs/utilities/slot',
    },
  ],
};
