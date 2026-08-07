import { RiArrowRightUpLine } from '@remixicon/react';

export type DocsPageLink = {
  label: string;
  href: string;
};

export function DocsPageLinks({ links }: { links: DocsPageLink[] }) {
  if (!links.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="bg-fd-secondary text-fd-muted-foreground hover:text-fd-foreground inline-flex h-7 items-center gap-1 rounded-lg border border-fd-border px-2 text-xs font-medium transition duration-200 ease-out"
        >
          {link.label}
          <RiArrowRightUpLine className="text-fd-muted-foreground size-3" />
        </a>
      ))}
    </div>
  );
}
