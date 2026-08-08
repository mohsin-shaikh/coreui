import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

export async function ComponentSource({
  src,
  title,
  prepend,
  append,
}: {
  src: string;
  title?: string;
  /** Text inserted before the file contents (e.g. a Tailwind import). */
  prepend?: string;
  /** Text inserted after the file contents (e.g. a Tailwind import). */
  append?: string;
}) {
  const filePath = join(/* turbopackIgnore: true */ process.cwd(), src);
  const body = await readFile(filePath, 'utf8');
  const prependedCode = prepend ? `${prepend}${body}` : body;
  const code = append ? `${prependedCode}${append}` : prependedCode;
  const ext = src.split('.').pop() || 'tsx';

  return (
    <DynamicCodeBlock
      lang={ext}
      code={code}
      codeblock={{
        title: title ?? src,
        'data-line-numbers': true,
      }}
    />
  );
}
