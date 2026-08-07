export const appName = 'CoreUI';

// Mirrors `basePath` in next.config.mjs. Next rewrites <Link> and asset URLs
// on its own; this is for the URLs we hand to fetch() ourselves.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a public/ asset path with basePath (needed for plain img src / CSS url). */
export function assetPath(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'mohsin-shaikh',
  repo: 'coreui',
  branch: 'main',
};
