import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarColor() {
  return (
    <div className="w-full max-w-96">
      <div className="flex w-full flex-col gap-4">
        <ProgressBar.Root color="blue" value={60} />
        <ProgressBar.Root color="red" value={60} />
        <ProgressBar.Root color="orange" value={60} />
        <ProgressBar.Root color="green" value={60} />
      </div>
    </div>
  );
}

export const code = `import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarColor() {
  return (
    <div className="w-full max-w-96">
      <div className="flex w-full flex-col gap-4">
        <ProgressBar.Root color="blue" value={60} />
        <ProgressBar.Root color="red" value={60} />
        <ProgressBar.Root color="orange" value={60} />
        <ProgressBar.Root color="green" value={60} />
      </div>
    </div>
  );
}`;
