import { StarRating } from '@/components/ui/svg-rating-icons';

export default function RatingCell() {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-bg-weak-50 px-3 py-2">
      <StarRating rating={4.5} />
      <span className="text-label-sm text-text-strong-950">4.5</span>
    </div>
  );
}

export const code = `import { StarRating } from '@/components/ui/svg-rating-icons';

export default function RatingCell() {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-bg-weak-50 px-3 py-2">
      <StarRating rating={4.5} />
      <span className="text-label-sm text-text-strong-950">4.5</span>
    </div>
  );
}`;
