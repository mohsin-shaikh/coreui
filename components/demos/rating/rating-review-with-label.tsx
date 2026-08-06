import { StarRating } from '@/components/ui/svg-rating-icons';

export default function RatingReviewWithLabel() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-title-h6 text-text-strong-950">0.5</span>
        <StarRating rating={0.5} />
        <span className="text-paragraph-sm text-text-sub-600">∙ 5.2K Ratings</span>
        <button
          type="button"
          className="text-paragraph-sm text-text-sub-600 underline"
        >
          18 reviews
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-title-h6 text-text-strong-950">4.5</span>
        <StarRating rating={4.5} />
        <span className="text-paragraph-sm text-text-sub-600">∙ 5.2K Ratings</span>
        <button
          type="button"
          className="text-paragraph-sm text-text-sub-600 underline"
        >
          18 reviews
        </button>
      </div>
    </div>
  );
}

export const code = `import { StarRating } from '@/components/ui/svg-rating-icons';

export default function RatingReviewWithLabel() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-title-h6 text-text-strong-950">0.5</span>
        <StarRating rating={0.5} />
        <span className="text-paragraph-sm text-text-sub-600">∙ 5.2K Ratings</span>
        <button
          type="button"
          className="text-paragraph-sm text-text-sub-600 underline"
        >
          18 reviews
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-title-h6 text-text-strong-950">4.5</span>
        <StarRating rating={4.5} />
        <span className="text-paragraph-sm text-text-sub-600">∙ 5.2K Ratings</span>
        <button
          type="button"
          className="text-paragraph-sm text-text-sub-600 underline"
        >
          18 reviews
        </button>
      </div>
    </div>
  );
}`;
