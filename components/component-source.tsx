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
    <div className="component-source not-prose my-4 flex flex-col gap-2 rounded-20 bg-bg-weak-25 p-2 md:my-6 md:gap-3 md:p-3">
      {title ? (
        <div className="text-ln-label-xs text-text-sub-600 px-1 font-medium">
          {title}
        </div>
      ) : null}
      <div className="bg-bg-white-0 relative max-h-150 overflow-hidden rounded-[11px] shadow-docs-xs">
        <div className="no-scrollbar max-h-150 overflow-auto [&_figure]:m-0 [&_figure]:rounded-[11px] [&_figure]:border-0 [&_figure]:shadow-none">
          <DynamicCodeBlock
            lang={ext}
            code={code}
            codeblock={{
              allowCopy: true,
              'data-line-numbers': true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
