import * as ProgressCircle from '@/components/ui/progress-circle';

const sizes = ['80', '72', '64', '56'] as const;
const values = [0, 25, 50, 75, 100];

export default function ProgressCircleSize() {
  return (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-wrap items-center justify-center gap-6">
          {values.map((value) => (
            <ProgressCircle.Root key={value} size={size} value={value}>
              <span className="text-text-strong-950">{value}%</span>
            </ProgressCircle.Root>
          ))}
        </div>
      ))}
    </div>
  );
}

export const code = `import * as ProgressCircle from '@/components/ui/progress-circle';

const sizes = ['80', '72', '64', '56'] as const;
const values = [0, 25, 50, 75, 100];

export default function ProgressCircleSize() {
  return (
    <div className="flex flex-col gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-wrap items-center justify-center gap-6">
          {values.map((value) => (
            <ProgressCircle.Root key={value} size={size} value={value}>
              <span className="text-text-strong-950">{value}%</span>
            </ProgressCircle.Root>
          ))}
        </div>
      ))}
    </div>
  );
}`;
