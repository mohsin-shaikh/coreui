import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarWithLabel() {
  return (
    <div className="w-full max-w-96">
      <div className="flex w-full items-center gap-3">
        <ProgressBar.Root value={80} className="flex-1" />
        <span className="text-label-sm text-text-sub-600">80%</span>
      </div>
    </div>
  );
}

export const code = `import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarWithLabel() {
  return (
    <div className="w-full max-w-96">
      <div className="flex w-full items-center gap-3">
        <ProgressBar.Root value={80} className="flex-1" />
        <span className="text-label-sm text-text-sub-600">80%</span>
      </div>
    </div>
  );
}`;
