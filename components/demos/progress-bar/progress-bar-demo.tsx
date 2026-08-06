import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarDemo() {
  return (
    <div className="w-full max-w-96">
      <ProgressBar.Root value={50} />
    </div>
  );
}

export const code = `import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarDemo() {
  return (
    <div className="w-full max-w-96">
      <ProgressBar.Root value={50} />
    </div>
  );
}`;
