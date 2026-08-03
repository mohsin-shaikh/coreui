import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

export async function ComponentSource({
  src,
  title,
}: {
  src: string;
  title?: string;
}) {
  const filePath = join(/* turbopackIgnore: true */ process.cwd(), src);
  const code = await readFile(filePath, 'utf8');
  const ext = src.split('.').pop() || 'tsx';

  return (
    <DynamicCodeBlock
      lang={ext}
      code={code}
      codeblock={{ title: title ?? src }}
    />
  );
}
