/**
 * Folders that read as a single sidebar entry: the folder links to its index
 * page, and its children stay out of both the sidebar and the breadcrumb.
 *
 * The pages themselves have to remain in the page tree — fumadocs picks which
 * `root` to scope the sidebar to by locating the current path inside it, so a
 * page missing from the tree collapses the sidebar back to the version folder.
 */
const flattenedFolders = ['/docs/v0.1/installation'];

/** True for the folder itself, e.g. `/docs/v0.1/installation`. */
export function isFlattenedFolder(url: string | undefined) {
  return url !== undefined && flattenedFolders.includes(url);
}
