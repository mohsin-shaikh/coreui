import * as ProgressCircle from '@/components/ui/progress-circle';

export default function ProgressCircleDemo() {
  return <ProgressCircle.Root value={50}>50%</ProgressCircle.Root>;
}

export const code = `import * as ProgressCircle from '@/components/ui/progress-circle';

export function ProgressCircleDemo() {
  return <ProgressCircle.Root value={50}>50%</ProgressCircle.Root>;
}
`;
