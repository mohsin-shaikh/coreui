'use client';

import * as React from 'react';

import {
  SVGStarFill,
  SVGStarLine,
} from '@/components/ui/svg-rating-icons';

export default function RatingBarStar() {
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
            aria-label={`Rate ${value} stars`}
            className="transition duration-200 ease-out"
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(value)}
          >
            {active ? (
              <SVGStarFill className="size-5 text-yellow-500" />
            ) : (
              <SVGStarLine className="size-5 text-stroke-sub-300" />
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
  SVGStarFill,
  SVGStarLine,
} from '@/components/ui/svg-rating-icons';

export default function RatingBarStar() {
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
            aria-label={\`Rate \${value} stars\`}
            className="transition duration-200 ease-out"
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(value)}
          >
            {active ? (
              <SVGStarFill className="size-5 text-yellow-500" />
            ) : (
              <SVGStarLine className="size-5 text-stroke-sub-300" />
            )}
          </button>
        );
      })}
    </div>
  );
}`;
