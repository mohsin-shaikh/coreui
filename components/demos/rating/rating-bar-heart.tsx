'use client';

import * as React from 'react';

import {
  SVGHeartFill,
  SVGHeartLine,
} from '@/components/ui/svg-rating-icons';

export default function RatingBarHeart() {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        const active = (hover || rating) >= value;

        return (
          <button
            key={value}
            type="button"
            aria-label={`Rate ${value} hearts`}
            className="transition duration-200 ease-out"
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(value)}
          >
            {active ? (
              <SVGHeartFill className="size-5 text-error-base" />
            ) : (
              <SVGHeartLine className="size-5 text-stroke-sub-300" />
            )}
          </button>
        );
      })}
    </div>
  );
}

export const code = `'use client';

import * as React from 'react';

import {
  SVGHeartFill,
  SVGHeartLine,
} from '@/components/ui/svg-rating-icons';

export default function RatingBarHeart() {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        const active = (hover || rating) >= value;

        return (
          <button
            key={value}
            type="button"
            aria-label={\`Rate \${value} hearts\`}
            className="transition duration-200 ease-out"
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(value)}
          >
            {active ? (
              <SVGHeartFill className="size-5 text-error-base" />
            ) : (
              <SVGHeartLine className="size-5 text-stroke-sub-300" />
            )}
          </button>
        );
      })}
    </div>
  );
}`;
