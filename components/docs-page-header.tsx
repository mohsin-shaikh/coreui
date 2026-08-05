import { RiArrowRightUpLine } from '@remixicon/react';

export type DocsPageLink = {
  label: string;
  href: string;
};

export function DocsPageLinks({ links }: { links: DocsPageLink[] }) {
  if (!links.length) return null;

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2 md:mt-6">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="bg-bg-weak-25 text-ln-label-xs text-ln-gray-600 shadow-docs-badge-gray inline-flex h-7 items-center gap-1 rounded-lg px-2 transition duration-200 ease-out hover:text-ln-gray-800"
        >
          {link.label}
          <RiArrowRightUpLine className="size-3 text-ln-gray-400" />
        </a>
      ))}
    </div>
  );
}

export function DocsDashedSeparator({ className }: { className?: string }) {
  return (
    <div className={className ?? 'mt-5 md:mt-6'}>
      <div
        role="separator"
        aria-hidden
        className="docs-dashed-separator -mt-px h-px w-full text-ln-gray-200"
      />
    </div>
  );
}
