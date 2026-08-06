'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';

export default function RatingBarWithTextarea() {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <div className="flex w-full max-w-96 flex-col gap-4">
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
      <textarea
        placeholder="Tell us about your experience..."
        className="min-h-24 w-full resize-none rounded-xl bg-bg-white-0 px-3 py-2.5 text-paragraph-sm text-text-strong-950 ring-1 ring-inset ring-stroke-soft-200 placeholder:text-text-soft-400 focus:outline-none focus:ring-stroke-strong-950"
      />
    </div>
  );
}

export const code = `'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';

export default function RatingBarWithTextarea() {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <div className="flex w-full max-w-96 flex-col gap-4">
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
      <textarea
        placeholder="Tell us about your experience..."
        className="min-h-24 w-full resize-none rounded-xl bg-bg-white-0 px-3 py-2.5 text-paragraph-sm text-text-strong-950 ring-1 ring-inset ring-stroke-soft-200 placeholder:text-text-soft-400 focus:outline-none focus:ring-stroke-strong-950"
      />
    </div>
  );
}`;
