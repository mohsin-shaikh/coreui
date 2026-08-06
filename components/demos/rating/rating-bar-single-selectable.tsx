'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';

const EMOJIS = ['😔', '😕', '😐', '🙂', '😄'];

export default function RatingBarSingleSelectable() {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        {EMOJIS.map((emoji, index) => {
          const value = index + 1;

          return (
            <button
              key={emoji}
              type="button"
              aria-label={`Rate ${value}`}
              className={cn(
                'flex size-10 items-center justify-center rounded-lg text-paragraph-lg transition duration-200 ease-out',
                rating === value
                  ? 'bg-bg-weak-50 ring-1 ring-inset ring-stroke-soft-200'
                  : 'hover:bg-bg-weak-50',
              )}
              onClick={() => setRating(value)}
            >
              {emoji}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }, (_, index) => {
          const value = index + 1;

          return (
            <button
              key={value}
              type="button"
              aria-label={`Rate ${value}`}
              className={cn(
                'flex size-10 items-center justify-center rounded-lg text-label-sm transition duration-200 ease-out',
                rating === value
                  ? 'bg-bg-weak-50 text-text-strong-950 ring-1 ring-inset ring-stroke-soft-200'
                  : 'text-text-sub-600 hover:bg-bg-weak-50',
              )}
              onClick={() => setRating(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export const code = `'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';

const EMOJIS = ['😔', '😕', '😐', '🙂', '😄'];

export default function RatingBarSingleSelectable() {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        {EMOJIS.map((emoji, index) => {
          const value = index + 1;

          return (
            <button
              key={emoji}
              type="button"
              aria-label={\`Rate \${value}\`}
              className={cn(
                'flex size-10 items-center justify-center rounded-lg text-paragraph-lg transition duration-200 ease-out',
                rating === value
                  ? 'bg-bg-weak-50 ring-1 ring-inset ring-stroke-soft-200'
                  : 'hover:bg-bg-weak-50',
              )}
              onClick={() => setRating(value)}
            >
              {emoji}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }, (_, index) => {
          const value = index + 1;

          return (
            <button
              key={value}
              type="button"
              aria-label={\`Rate \${value}\`}
              className={cn(
                'flex size-10 items-center justify-center rounded-lg text-label-sm transition duration-200 ease-out',
                rating === value
                  ? 'bg-bg-weak-50 text-text-strong-950 ring-1 ring-inset ring-stroke-soft-200'
                  : 'text-text-sub-600 hover:bg-bg-weak-50',
              )}
              onClick={() => setRating(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}`;
