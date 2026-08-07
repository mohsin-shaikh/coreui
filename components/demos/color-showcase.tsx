'use client';

import * as React from 'react';
import type { ReactNode } from 'react';

type ColorToken = {
  name: string;
  /** Token without `--color-` prefix, e.g. `gray-50` */
  token: string;
  alias?: string;
  alpha?: number;
};

function toHexChannel(value: number) {
  return Math.round(value).toString(16).padStart(2, '0');
}

function parseCssColor(value: string): { hex: string; alphaPercent?: number } | null {
  const trimmed = value.trim();

  if (trimmed.startsWith('#')) {
    const raw = trimmed.slice(1);
    if (raw.length === 3 || raw.length === 4) {
      const [r, g, b, a] = raw.split('');
      const hex = `#${r}${r}${g}${g}${b}${b}`;
      if (a !== undefined) {
        return {
          hex,
          alphaPercent: Math.round((parseInt(a + a, 16) / 255) * 100),
        };
      }
      return { hex };
    }
    if (raw.length === 6) {
      return { hex: `#${raw.toLowerCase()}` };
    }
    if (raw.length === 8) {
      const rgb = raw.slice(0, 6).toLowerCase();
      const alpha = parseInt(raw.slice(6), 16);
      return {
        hex: `#${rgb}`,
        alphaPercent: Math.round((alpha / 255) * 100),
      };
    }
  }

  const rgba = trimmed.match(
    /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i,
  );
  if (rgba) {
    const [, r, g, b, a] = rgba;
    const hex = `#${toHexChannel(+r)}${toHexChannel(+g)}${toHexChannel(+b)}`;
    if (a !== undefined && +a < 1) {
      return { hex, alphaPercent: Math.round(+a * 100) };
    }
    return { hex };
  }

  const modern = trimmed.match(
    /^rgba?\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+%?))?\s*\)$/i,
  );
  if (modern) {
    const [, r, g, b, a] = modern;
    const hex = `#${toHexChannel(+r)}${toHexChannel(+g)}${toHexChannel(+b)}`;
    if (a !== undefined) {
      const alpha = a.endsWith('%') ? parseFloat(a) / 100 : +a;
      if (alpha < 1) {
        return { hex, alphaPercent: Math.round(alpha * 100) };
      }
    }
    return { hex };
  }

  return null;
}

function useResolvedColor(token: string, alpha?: number) {
  const swatchRef = React.useRef<HTMLDivElement>(null);
  const [hex, setHex] = React.useState<string | null>(null);
  const [alphaPercent, setAlphaPercent] = React.useState<number | undefined>(
    alpha,
  );

  React.useEffect(() => {
    const el = swatchRef.current;
    if (!el) return;

    const resolved = getComputedStyle(el).backgroundColor;
    const parsed = parseCssColor(resolved);
    if (!parsed) return;

    // Unresolved CSS variables resolve to transparent — skip those.
    if (parsed.alphaPercent === 0) return;

    setHex(parsed.hex);
    setAlphaPercent(alpha ?? parsed.alphaPercent);
  }, [token, alpha]);

  return { swatchRef, hex, alphaPercent };
}

function HexBadge({
  hex,
  alphaPercent,
}: {
  hex: string | null;
  alphaPercent?: number;
}) {
  const [copied, setCopied] = React.useState(false);

  if (!hex) {
    return (
      <div className="bg-fd-secondary text-fd-muted-foreground h-[22px] w-16 rounded-md border border-fd-border" />
    );
  }

  const label =
    alphaPercent !== undefined ? (
      <>
        <span>{hex}</span>
        <span className="text-fd-muted-foreground">·</span>
        <span>{alphaPercent}%</span>
      </>
    ) : (
      hex
    );

  const copyValue =
    alphaPercent !== undefined ? `${hex} · ${alphaPercent}%` : hex;

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore clipboard errors
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className="bg-fd-secondary text-fd-muted-foreground hover:text-fd-foreground flex items-center gap-1 rounded-md border border-fd-border px-[7px] py-[3px] font-mono text-xs uppercase transition"
      aria-label={`Copy ${copyValue}`}
    >
      {copied ? 'copied' : label}
    </button>
  );
}

function ColorSwatch({ name, token, alias, alpha }: ColorToken) {
  const { swatchRef, hex, alphaPercent } = useResolvedColor(token, alpha);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-fd-border">
      <div className="flex h-20 w-full border-b border-fd-border">
        <div
          ref={swatchRef}
          className="flex-1"
          style={{ backgroundColor: `var(--color-${token})` }}
        />
      </div>
      <div className="flex flex-col items-start px-3.5 pt-2.5 pb-3.5">
        <div className="text-fd-foreground text-sm font-medium">{name}</div>
        <div className="text-fd-muted-foreground mt-1 text-xs">
          var(--{token})
        </div>
        {alias ? (
          <div className="text-fd-muted-foreground mt-0.5 text-xs">
            {alias}
          </div>
        ) : null}
        <div className="mt-2.5 flex flex-col items-start gap-2">
          <HexBadge hex={hex} alphaPercent={alphaPercent} />
        </div>
      </div>
    </div>
  );
}

export function ColorScale({
  title,
  tokens,
  variant = 'solid',
}: {
  title: string;
  tokens: ColorToken[];
  variant?: 'solid' | 'alpha';
}) {
  if (variant === 'alpha') {
    return (
      <div>
        <div className="text-fd-muted-foreground border-l-2 border-fd-border pl-3 text-sm font-medium capitalize">
          {title}
        </div>
        <div className="mt-6 grid gap-4 min-[400px]:grid-cols-2 sm:grid-cols-3">
          {tokens.map((token) => (
            <ColorSwatch key={token.name} {...token} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-fd-foreground text-xl font-semibold capitalize tracking-tight">
        {title}
      </div>
      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(174px,1fr))] gap-x-4 gap-y-[22px]">
        {tokens.map((token) => (
          <ColorSwatch key={token.name} {...token} />
        ))}
      </div>
    </div>
  );
}

export function ColorSection({ children }: { children: ReactNode }) {
  return <div className="not-prose flex flex-col gap-[38px]">{children}</div>;
}

function scale(
  family: string,
  steps: (string | number)[],
  options?: { aliasPrefix?: string; alpha?: boolean },
): ColorToken[] {
  return steps.map((step) => {
    const name = `${family}-${step}`;
    return {
      name,
      token: name,
      alias: options?.aliasPrefix
        ? `${options.aliasPrefix}-${step}`
        : undefined,
      alpha: options?.alpha ? Number(step) : undefined,
    };
  });
}

const RAW_STEPS = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const ACCENT_STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const ALPHA_STEPS = [24, 16, 10] as const;

export function ColorPalette() {
  return (
    <ColorSection>
      <ColorScale title="gray" tokens={scale('gray', [...RAW_STEPS])} />
      <ColorScale
        title="gray Alpha"
        variant="alpha"
        tokens={scale('gray-alpha', [...ALPHA_STEPS], { alpha: true })}
      />
      <ColorScale title="slate" tokens={scale('slate', [...RAW_STEPS])} />
      <ColorScale
        title="slate Alpha"
        variant="alpha"
        tokens={scale('slate-alpha', [...ALPHA_STEPS], { alpha: true })}
      />
      {(
        [
          'blue',
          'orange',
          'red',
          'green',
          'yellow',
          'purple',
          'sky',
          'pink',
          'teal',
        ] as const
      ).map((family) => (
        <div key={family} className="contents">
          <ColorScale title={family} tokens={scale(family, [...ACCENT_STEPS])} />
          <ColorScale
            title={`${family} Alpha`}
            variant="alpha"
            tokens={scale(`${family}-alpha`, [...ALPHA_STEPS], { alpha: true })}
          />
        </div>
      ))}

      <ColorScale
        title="static"
        tokens={[
          { name: 'static-black', token: 'static-black' },
          { name: 'static-white', token: 'static-white' },
        ]}
      />

      <ColorScale
        title="neutral"
        tokens={scale('neutral', [...RAW_STEPS], { aliasPrefix: 'gray' })}
      />
      <ColorScale
        title="neutral Alpha"
        variant="alpha"
        tokens={scale('neutral-alpha', [...ALPHA_STEPS], {
          aliasPrefix: 'gray-alpha',
          alpha: true,
        })}
      />

      <ColorScale
        title="illustration"
        tokens={[
          {
            name: 'illustration-white-0',
            token: 'illustration-white-0',
            alias: 'neutral-0',
          },
          {
            name: 'illustration-weak-100',
            token: 'illustration-weak-100',
            alias: 'neutral-100',
          },
          {
            name: 'illustration-soft-200',
            token: 'illustration-soft-200',
            alias: 'neutral-200',
          },
          {
            name: 'illustration-sub-300',
            token: 'illustration-sub-300',
            alias: 'neutral-300',
          },
          {
            name: 'illustration-strong-400',
            token: 'illustration-strong-400',
            alias: 'neutral-400',
          },
        ]}
      />

      <ColorScale
        title="text"
        tokens={[
          {
            name: 'text-strong-950',
            token: 'text-strong-950',
            alias: 'neutral-950 / neutral-0',
          },
          {
            name: 'text-sub-600',
            token: 'text-sub-600',
            alias: 'neutral-600 / neutral-400',
          },
          {
            name: 'text-soft-400',
            token: 'text-soft-400',
            alias: 'neutral-400 / neutral-500',
          },
          {
            name: 'text-disabled-300',
            token: 'text-disabled-300',
            alias: 'neutral-300 / neutral-600',
          },
          {
            name: 'text-white-0',
            token: 'text-white-0',
            alias: 'neutral-0 / neutral-950',
          },
        ]}
      />

      <ColorScale
        title="bg"
        tokens={[
          {
            name: 'bg-strong-950',
            token: 'bg-strong-950',
            alias: 'neutral-950 / neutral-0',
          },
          {
            name: 'bg-surface-800',
            token: 'bg-surface-800',
            alias: 'neutral-800 / neutral-200',
          },
          {
            name: 'bg-sub-300',
            token: 'bg-sub-300',
            alias: 'neutral-300 / neutral-600',
          },
          {
            name: 'bg-soft-200',
            token: 'bg-soft-200',
            alias: 'neutral-200 / neutral-700',
          },
          {
            name: 'bg-weak-50',
            token: 'bg-weak-50',
            alias: 'neutral-50 / neutral-900',
          },
          {
            name: 'bg-weak-25',
            token: 'bg-weak-25',
            alias: 'neutral-50 / neutral-900',
          },
          {
            name: 'bg-white-0',
            token: 'bg-white-0',
            alias: 'neutral-0 / neutral-950',
          },
        ]}
      />

      <ColorScale
        title="stroke"
        tokens={[
          {
            name: 'stroke-strong-950',
            token: 'stroke-strong-950',
            alias: 'neutral-950 / neutral-0',
          },
          {
            name: 'stroke-sub-300',
            token: 'stroke-sub-300',
            alias: 'neutral-300 / neutral-600',
          },
          {
            name: 'stroke-soft-200',
            token: 'stroke-soft-200',
            alias: 'neutral-200 / neutral-800',
          },
          {
            name: 'stroke-white-0',
            token: 'stroke-white-0',
            alias: 'neutral-0 / neutral-950',
          },
        ]}
      />

      <ColorScale
        title="primary"
        tokens={[
          { name: 'primary-dark', token: 'primary-dark', alias: 'blue-800' },
          {
            name: 'primary-darker',
            token: 'primary-darker',
            alias: 'blue-700',
          },
          { name: 'primary-base', token: 'primary-base', alias: 'blue-500' },
        ]}
      />
      <ColorScale
        title="primary Alpha"
        variant="alpha"
        tokens={scale('primary-alpha', [...ALPHA_STEPS], {
          aliasPrefix: 'blue-alpha',
          alpha: true,
        })}
      />

      {(
        [
          'faded',
          'information',
          'warning',
          'error',
          'success',
          'away',
          'feature',
          'verified',
          'highlighted',
          'stable',
        ] as const
      ).map((family) => (
        <ColorScale
          key={family}
          title={family}
          tokens={(['dark', 'base', 'light', 'lighter'] as const).map((step) => ({
            name: `${family}-${step}`,
            token: `${family}-${step}`,
          }))}
        />
      ))}

      <ColorScale
        title="social"
        tokens={[
          'apple',
          'twitter',
          'github',
          'notion',
          'tidal',
          'amazon',
          'zendesk',
        ].map((name) => ({
          name: `social-${name}`,
          token: `social-${name}`,
        }))}
      />
    </ColorSection>
  );
}
