import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

import { DocsCodeFrame } from '@/components/docs-code-frame';
import { cssVariablesThemeForShiki } from '@/lib/shiki-theme';

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
  const label = title ?? src;

  return (
    <DocsCodeFrame label={label} code={code} variant="source">
      <DynamicCodeBlock
        lang={ext}
        code={code}
        options={{ theme: cssVariablesThemeForShiki }}
        codeblock={{
          allowCopy: false,
        }}
      />
    </DocsCodeFrame>
  );
}
