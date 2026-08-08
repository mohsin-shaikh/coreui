'use client';

import * as React from 'react';
import type { ReactNode } from 'react';

type ColorToken = {
  name: string;
  /** Token without `--color-` prefix, e.g. `gray-50` */
  token: string;
  /** Literal Tailwind class so the scanner can detect it */
  className: string;
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

function useResolvedColor(className: string, alpha?: number) {
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
  }, [className, alpha]);

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

function ColorSwatch({ name, token, className, alias, alpha }: ColorToken) {
  const { swatchRef, hex, alphaPercent } = useResolvedColor(className, alpha);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-fd-border">
      <div className="flex h-20 w-full border-b border-fd-border">
        <div ref={swatchRef} className={`flex-1 ${className}`} />
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

function t(
  name: string,
  className: string,
  options?: { alias?: string; alpha?: number },
): ColorToken {
  return {
    name,
    token: name,
    className,
    alias: options?.alias,
    alpha: options?.alpha,
  };
}

const GRAY = [
  t('gray-0', 'bg-gray-0'),
  t('gray-50', 'bg-gray-50'),
  t('gray-100', 'bg-gray-100'),
  t('gray-200', 'bg-gray-200'),
  t('gray-300', 'bg-gray-300'),
  t('gray-400', 'bg-gray-400'),
  t('gray-500', 'bg-gray-500'),
  t('gray-600', 'bg-gray-600'),
  t('gray-700', 'bg-gray-700'),
  t('gray-800', 'bg-gray-800'),
  t('gray-900', 'bg-gray-900'),
  t('gray-950', 'bg-gray-950'),
];

const GRAY_ALPHA = [
  t('gray-alpha-24', 'bg-gray-alpha-24', { alpha: 24 }),
  t('gray-alpha-16', 'bg-gray-alpha-16', { alpha: 16 }),
  t('gray-alpha-10', 'bg-gray-alpha-10', { alpha: 10 }),
];

const SLATE = [
  t('slate-0', 'bg-slate-0'),
  t('slate-50', 'bg-slate-50'),
  t('slate-100', 'bg-slate-100'),
  t('slate-200', 'bg-slate-200'),
  t('slate-300', 'bg-slate-300'),
  t('slate-400', 'bg-slate-400'),
  t('slate-500', 'bg-slate-500'),
  t('slate-600', 'bg-slate-600'),
  t('slate-700', 'bg-slate-700'),
  t('slate-800', 'bg-slate-800'),
  t('slate-900', 'bg-slate-900'),
  t('slate-950', 'bg-slate-950'),
];

const SLATE_ALPHA = [
  t('slate-alpha-24', 'bg-slate-alpha-24', { alpha: 24 }),
  t('slate-alpha-16', 'bg-slate-alpha-16', { alpha: 16 }),
  t('slate-alpha-10', 'bg-slate-alpha-10', { alpha: 10 }),
];

const BLUE = [
  t('blue-50', 'bg-blue-50'),
  t('blue-100', 'bg-blue-100'),
  t('blue-200', 'bg-blue-200'),
  t('blue-300', 'bg-blue-300'),
  t('blue-400', 'bg-blue-400'),
  t('blue-500', 'bg-blue-500'),
  t('blue-600', 'bg-blue-600'),
  t('blue-700', 'bg-blue-700'),
  t('blue-800', 'bg-blue-800'),
  t('blue-900', 'bg-blue-900'),
  t('blue-950', 'bg-blue-950'),
];

const BLUE_ALPHA = [
  t('blue-alpha-24', 'bg-blue-alpha-24', { alpha: 24 }),
  t('blue-alpha-16', 'bg-blue-alpha-16', { alpha: 16 }),
  t('blue-alpha-10', 'bg-blue-alpha-10', { alpha: 10 }),
];

const ORANGE = [
  t('orange-50', 'bg-orange-50'),
  t('orange-100', 'bg-orange-100'),
  t('orange-200', 'bg-orange-200'),
  t('orange-300', 'bg-orange-300'),
  t('orange-400', 'bg-orange-400'),
  t('orange-500', 'bg-orange-500'),
  t('orange-600', 'bg-orange-600'),
  t('orange-700', 'bg-orange-700'),
  t('orange-800', 'bg-orange-800'),
  t('orange-900', 'bg-orange-900'),
  t('orange-950', 'bg-orange-950'),
];

const ORANGE_ALPHA = [
  t('orange-alpha-24', 'bg-orange-alpha-24', { alpha: 24 }),
  t('orange-alpha-16', 'bg-orange-alpha-16', { alpha: 16 }),
  t('orange-alpha-10', 'bg-orange-alpha-10', { alpha: 10 }),
];

const RED = [
  t('red-50', 'bg-red-50'),
  t('red-100', 'bg-red-100'),
  t('red-200', 'bg-red-200'),
  t('red-300', 'bg-red-300'),
  t('red-400', 'bg-red-400'),
  t('red-500', 'bg-red-500'),
  t('red-600', 'bg-red-600'),
  t('red-700', 'bg-red-700'),
  t('red-800', 'bg-red-800'),
  t('red-900', 'bg-red-900'),
  t('red-950', 'bg-red-950'),
];

const RED_ALPHA = [
  t('red-alpha-24', 'bg-red-alpha-24', { alpha: 24 }),
  t('red-alpha-16', 'bg-red-alpha-16', { alpha: 16 }),
  t('red-alpha-10', 'bg-red-alpha-10', { alpha: 10 }),
];

const GREEN = [
  t('green-50', 'bg-green-50'),
  t('green-100', 'bg-green-100'),
  t('green-200', 'bg-green-200'),
  t('green-300', 'bg-green-300'),
  t('green-400', 'bg-green-400'),
  t('green-500', 'bg-green-500'),
  t('green-600', 'bg-green-600'),
  t('green-700', 'bg-green-700'),
  t('green-800', 'bg-green-800'),
  t('green-900', 'bg-green-900'),
  t('green-950', 'bg-green-950'),
];

const GREEN_ALPHA = [
  t('green-alpha-24', 'bg-green-alpha-24', { alpha: 24 }),
  t('green-alpha-16', 'bg-green-alpha-16', { alpha: 16 }),
  t('green-alpha-10', 'bg-green-alpha-10', { alpha: 10 }),
];

const YELLOW = [
  t('yellow-50', 'bg-yellow-50'),
  t('yellow-100', 'bg-yellow-100'),
  t('yellow-200', 'bg-yellow-200'),
  t('yellow-300', 'bg-yellow-300'),
  t('yellow-400', 'bg-yellow-400'),
  t('yellow-500', 'bg-yellow-500'),
  t('yellow-600', 'bg-yellow-600'),
  t('yellow-700', 'bg-yellow-700'),
  t('yellow-800', 'bg-yellow-800'),
  t('yellow-900', 'bg-yellow-900'),
  t('yellow-950', 'bg-yellow-950'),
];

const YELLOW_ALPHA = [
  t('yellow-alpha-24', 'bg-yellow-alpha-24', { alpha: 24 }),
  t('yellow-alpha-16', 'bg-yellow-alpha-16', { alpha: 16 }),
  t('yellow-alpha-10', 'bg-yellow-alpha-10', { alpha: 10 }),
];

const PURPLE = [
  t('purple-50', 'bg-purple-50'),
  t('purple-100', 'bg-purple-100'),
  t('purple-200', 'bg-purple-200'),
  t('purple-300', 'bg-purple-300'),
  t('purple-400', 'bg-purple-400'),
  t('purple-500', 'bg-purple-500'),
  t('purple-600', 'bg-purple-600'),
  t('purple-700', 'bg-purple-700'),
  t('purple-800', 'bg-purple-800'),
  t('purple-900', 'bg-purple-900'),
  t('purple-950', 'bg-purple-950'),
];

const PURPLE_ALPHA = [
  t('purple-alpha-24', 'bg-purple-alpha-24', { alpha: 24 }),
  t('purple-alpha-16', 'bg-purple-alpha-16', { alpha: 16 }),
  t('purple-alpha-10', 'bg-purple-alpha-10', { alpha: 10 }),
];

const SKY = [
  t('sky-50', 'bg-sky-50'),
  t('sky-100', 'bg-sky-100'),
  t('sky-200', 'bg-sky-200'),
  t('sky-300', 'bg-sky-300'),
  t('sky-400', 'bg-sky-400'),
  t('sky-500', 'bg-sky-500'),
  t('sky-600', 'bg-sky-600'),
  t('sky-700', 'bg-sky-700'),
  t('sky-800', 'bg-sky-800'),
  t('sky-900', 'bg-sky-900'),
  t('sky-950', 'bg-sky-950'),
];

const SKY_ALPHA = [
  t('sky-alpha-24', 'bg-sky-alpha-24', { alpha: 24 }),
  t('sky-alpha-16', 'bg-sky-alpha-16', { alpha: 16 }),
  t('sky-alpha-10', 'bg-sky-alpha-10', { alpha: 10 }),
];

const PINK = [
  t('pink-50', 'bg-pink-50'),
  t('pink-100', 'bg-pink-100'),
  t('pink-200', 'bg-pink-200'),
  t('pink-300', 'bg-pink-300'),
  t('pink-400', 'bg-pink-400'),
  t('pink-500', 'bg-pink-500'),
  t('pink-600', 'bg-pink-600'),
  t('pink-700', 'bg-pink-700'),
  t('pink-800', 'bg-pink-800'),
  t('pink-900', 'bg-pink-900'),
  t('pink-950', 'bg-pink-950'),
];

const PINK_ALPHA = [
  t('pink-alpha-24', 'bg-pink-alpha-24', { alpha: 24 }),
  t('pink-alpha-16', 'bg-pink-alpha-16', { alpha: 16 }),
  t('pink-alpha-10', 'bg-pink-alpha-10', { alpha: 10 }),
];

const TEAL = [
  t('teal-50', 'bg-teal-50'),
  t('teal-100', 'bg-teal-100'),
  t('teal-200', 'bg-teal-200'),
  t('teal-300', 'bg-teal-300'),
  t('teal-400', 'bg-teal-400'),
  t('teal-500', 'bg-teal-500'),
  t('teal-600', 'bg-teal-600'),
  t('teal-700', 'bg-teal-700'),
  t('teal-800', 'bg-teal-800'),
  t('teal-900', 'bg-teal-900'),
  t('teal-950', 'bg-teal-950'),
];

const TEAL_ALPHA = [
  t('teal-alpha-24', 'bg-teal-alpha-24', { alpha: 24 }),
  t('teal-alpha-16', 'bg-teal-alpha-16', { alpha: 16 }),
  t('teal-alpha-10', 'bg-teal-alpha-10', { alpha: 10 }),
];

const STATIC = [
  t('static-black', 'bg-static-black'),
  t('static-white', 'bg-static-white'),
];

const NEUTRAL = [
  t('neutral-0', 'bg-neutral-0', { alias: 'gray-0' }),
  t('neutral-50', 'bg-neutral-50', { alias: 'gray-50' }),
  t('neutral-100', 'bg-neutral-100', { alias: 'gray-100' }),
  t('neutral-200', 'bg-neutral-200', { alias: 'gray-200' }),
  t('neutral-300', 'bg-neutral-300', { alias: 'gray-300' }),
  t('neutral-400', 'bg-neutral-400', { alias: 'gray-400' }),
  t('neutral-500', 'bg-neutral-500', { alias: 'gray-500' }),
  t('neutral-600', 'bg-neutral-600', { alias: 'gray-600' }),
  t('neutral-700', 'bg-neutral-700', { alias: 'gray-700' }),
  t('neutral-800', 'bg-neutral-800', { alias: 'gray-800' }),
  t('neutral-900', 'bg-neutral-900', { alias: 'gray-900' }),
  t('neutral-950', 'bg-neutral-950', { alias: 'gray-950' }),
];

const NEUTRAL_ALPHA = [
  t('neutral-alpha-24', 'bg-neutral-alpha-24', {
    alias: 'gray-alpha-24',
    alpha: 24,
  }),
  t('neutral-alpha-16', 'bg-neutral-alpha-16', {
    alias: 'gray-alpha-16',
    alpha: 16,
  }),
  t('neutral-alpha-10', 'bg-neutral-alpha-10', {
    alias: 'gray-alpha-10',
    alpha: 10,
  }),
];

const TEXT = [
  t('text-strong-950', 'bg-text-strong-950', {
    alias: 'neutral-950 / neutral-0',
  }),
  t('text-sub-600', 'bg-text-sub-600', { alias: 'neutral-600 / neutral-400' }),
  t('text-soft-400', 'bg-text-soft-400', { alias: 'neutral-400 / neutral-500' }),
  t('text-disabled-300', 'bg-text-disabled-300', {
    alias: 'neutral-300 / neutral-600',
  }),
  t('text-white-0', 'bg-text-white-0', { alias: 'neutral-0 / neutral-950' }),
];

const BG = [
  t('bg-strong-950', 'bg-bg-strong-950', { alias: 'neutral-950 / neutral-0' }),
  t('bg-surface-800', 'bg-bg-surface-800', {
    alias: 'neutral-800 / neutral-200',
  }),
  t('bg-sub-300', 'bg-bg-sub-300', { alias: 'neutral-300 / neutral-600' }),
  t('bg-soft-200', 'bg-bg-soft-200', { alias: 'neutral-200 / neutral-700' }),
  t('bg-weak-50', 'bg-bg-weak-50', { alias: 'neutral-50 / neutral-900' }),
  t('bg-weak-25', 'bg-bg-weak-25', { alias: 'neutral-50 / neutral-900' }),
  t('bg-white-0', 'bg-bg-white-0', { alias: 'neutral-0 / neutral-950' }),
];

const STROKE = [
  t('stroke-strong-950', 'bg-stroke-strong-950', {
    alias: 'neutral-950 / neutral-0',
  }),
  t('stroke-sub-300', 'bg-stroke-sub-300', {
    alias: 'neutral-300 / neutral-600',
  }),
  t('stroke-soft-200', 'bg-stroke-soft-200', {
    alias: 'neutral-200 / neutral-800',
  }),
  t('stroke-white-0', 'bg-stroke-white-0', {
    alias: 'neutral-0 / neutral-950',
  }),
];

const PRIMARY = [
  t('primary-dark', 'bg-primary-dark', { alias: 'blue-800' }),
  t('primary-darker', 'bg-primary-darker', { alias: 'blue-700' }),
  t('primary-base', 'bg-primary-base', { alias: 'blue-500' }),
];

const PRIMARY_ALPHA = [
  t('primary-alpha-24', 'bg-primary-alpha-24', {
    alias: 'blue-alpha-24',
    alpha: 24,
  }),
  t('primary-alpha-16', 'bg-primary-alpha-16', {
    alias: 'blue-alpha-16',
    alpha: 16,
  }),
  t('primary-alpha-10', 'bg-primary-alpha-10', {
    alias: 'blue-alpha-10',
    alpha: 10,
  }),
];

const FADED = [
  t('faded-dark', 'bg-faded-dark'),
  t('faded-base', 'bg-faded-base'),
  t('faded-light', 'bg-faded-light'),
  t('faded-lighter', 'bg-faded-lighter'),
];

const INFORMATION = [
  t('information-dark', 'bg-information-dark'),
  t('information-base', 'bg-information-base'),
  t('information-light', 'bg-information-light'),
  t('information-lighter', 'bg-information-lighter'),
];

const WARNING = [
  t('warning-dark', 'bg-warning-dark'),
  t('warning-base', 'bg-warning-base'),
  t('warning-light', 'bg-warning-light'),
  t('warning-lighter', 'bg-warning-lighter'),
];

const ERROR = [
  t('error-dark', 'bg-error-dark'),
  t('error-base', 'bg-error-base'),
  t('error-light', 'bg-error-light'),
  t('error-lighter', 'bg-error-lighter'),
];

const SUCCESS = [
  t('success-dark', 'bg-success-dark'),
  t('success-base', 'bg-success-base'),
  t('success-light', 'bg-success-light'),
  t('success-lighter', 'bg-success-lighter'),
];

const AWAY = [
  t('away-dark', 'bg-away-dark'),
  t('away-base', 'bg-away-base'),
  t('away-light', 'bg-away-light'),
  t('away-lighter', 'bg-away-lighter'),
];

const FEATURE = [
  t('feature-dark', 'bg-feature-dark'),
  t('feature-base', 'bg-feature-base'),
  t('feature-light', 'bg-feature-light'),
  t('feature-lighter', 'bg-feature-lighter'),
];

const VERIFIED = [
  t('verified-dark', 'bg-verified-dark'),
  t('verified-base', 'bg-verified-base'),
  t('verified-light', 'bg-verified-light'),
  t('verified-lighter', 'bg-verified-lighter'),
];

const HIGHLIGHTED = [
  t('highlighted-dark', 'bg-highlighted-dark'),
  t('highlighted-base', 'bg-highlighted-base'),
  t('highlighted-light', 'bg-highlighted-light'),
  t('highlighted-lighter', 'bg-highlighted-lighter'),
];

const STABLE = [
  t('stable-dark', 'bg-stable-dark'),
  t('stable-base', 'bg-stable-base'),
  t('stable-light', 'bg-stable-light'),
  t('stable-lighter', 'bg-stable-lighter'),
];

const SOCIAL = [
  t('social-apple', 'bg-social-apple'),
  t('social-twitter', 'bg-social-twitter'),
  t('social-github', 'bg-social-github'),
  t('social-notion', 'bg-social-notion'),
  t('social-tidal', 'bg-social-tidal'),
  t('social-amazon', 'bg-social-amazon'),
  t('social-zendesk', 'bg-social-zendesk'),
];

export function ColorPalette() {
  return (
    <ColorSection>
      <ColorScale title="gray" tokens={GRAY} />
      <ColorScale title="gray Alpha" variant="alpha" tokens={GRAY_ALPHA} />
      <ColorScale title="slate" tokens={SLATE} />
      <ColorScale title="slate Alpha" variant="alpha" tokens={SLATE_ALPHA} />
      <ColorScale title="blue" tokens={BLUE} />
      <ColorScale title="blue Alpha" variant="alpha" tokens={BLUE_ALPHA} />
      <ColorScale title="orange" tokens={ORANGE} />
      <ColorScale title="orange Alpha" variant="alpha" tokens={ORANGE_ALPHA} />
      <ColorScale title="red" tokens={RED} />
      <ColorScale title="red Alpha" variant="alpha" tokens={RED_ALPHA} />
      <ColorScale title="green" tokens={GREEN} />
      <ColorScale title="green Alpha" variant="alpha" tokens={GREEN_ALPHA} />
      <ColorScale title="yellow" tokens={YELLOW} />
      <ColorScale title="yellow Alpha" variant="alpha" tokens={YELLOW_ALPHA} />
      <ColorScale title="purple" tokens={PURPLE} />
      <ColorScale title="purple Alpha" variant="alpha" tokens={PURPLE_ALPHA} />
      <ColorScale title="sky" tokens={SKY} />
      <ColorScale title="sky Alpha" variant="alpha" tokens={SKY_ALPHA} />
      <ColorScale title="pink" tokens={PINK} />
      <ColorScale title="pink Alpha" variant="alpha" tokens={PINK_ALPHA} />
      <ColorScale title="teal" tokens={TEAL} />
      <ColorScale title="teal Alpha" variant="alpha" tokens={TEAL_ALPHA} />
      <ColorScale title="static" tokens={STATIC} />
      <ColorScale title="neutral" tokens={NEUTRAL} />
      <ColorScale
        title="neutral Alpha"
        variant="alpha"
        tokens={NEUTRAL_ALPHA}
      />
      <ColorScale title="text" tokens={TEXT} />
      <ColorScale title="bg" tokens={BG} />
      <ColorScale title="stroke" tokens={STROKE} />
      <ColorScale title="primary" tokens={PRIMARY} />
      <ColorScale
        title="primary Alpha"
        variant="alpha"
        tokens={PRIMARY_ALPHA}
      />
      <ColorScale title="faded" tokens={FADED} />
      <ColorScale title="information" tokens={INFORMATION} />
      <ColorScale title="warning" tokens={WARNING} />
      <ColorScale title="error" tokens={ERROR} />
      <ColorScale title="success" tokens={SUCCESS} />
      <ColorScale title="away" tokens={AWAY} />
      <ColorScale title="feature" tokens={FEATURE} />
      <ColorScale title="verified" tokens={VERIFIED} />
      <ColorScale title="highlighted" tokens={HIGHLIGHTED} />
      <ColorScale title="stable" tokens={STABLE} />
      <ColorScale title="social" tokens={SOCIAL} />
    </ColorSection>
  );
}
