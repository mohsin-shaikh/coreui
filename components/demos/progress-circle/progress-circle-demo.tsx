import * as ProgressCircle from '@/components/ui/progress-circle';

export default function ProgressCircleDemo() {
  return (
    <ProgressCircle.Root value={50}>
      <span className="text-text-strong-950">50%</span>
    </ProgressCircle.Root>
  );
}

export const code = `import * as ProgressCircle from '@/components/ui/progress-circle';

export default function ProgressCircleDemo() {
  return (
    <ProgressCircle.Root value={50}>
      <span className="text-text-strong-950">50%</span>
    </ProgressCircle.Root>
  );
}`;
