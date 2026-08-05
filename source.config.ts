import { defineConfig } from 'fumadocs-mdx/config';

import { cssVariablesThemes } from './lib/shiki-theme';

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      // Must use `themes` (not `theme`) so fumadocs' default github-light/dark are replaced.
      // use data-theme="css-variables" with color: var(--shiki-token-*)
      themes: cssVariablesThemes,
    },
  },
});
