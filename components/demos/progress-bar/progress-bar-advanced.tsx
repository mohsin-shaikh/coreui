import * as LinkButton from '@/components/ui/link-button';
import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarAdvanced() {
  return (
    <div className="w-full max-w-96">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <span className="text-label-sm text-text-strong-950">
            Data Storage
          </span>
          <span className="text-label-sm text-text-sub-600">80%</span>
        </div>
        <ProgressBar.Root value={80} />
        <p className="text-paragraph-sm text-text-sub-600">
          Upgrade to unlock unlimited date storage.{' '}
          <LinkButton.Root variant="primary" size="small" underline>
            Upgrade
          </LinkButton.Root>
        </p>
      </div>
    </div>
  );
}

export const code = `import * as LinkButton from '@/components/ui/link-button';
import * as ProgressBar from '@/components/ui/progress-bar';

export default function ProgressBarAdvanced() {
  return (
    <div className="w-full max-w-96">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <span className="text-label-sm text-text-strong-950">Data Storage</span>
          <span className="text-label-sm text-text-sub-600">80%</span>
        </div>
        <ProgressBar.Root value={80} />
        <p className="text-paragraph-sm text-text-sub-600">
          Upgrade to unlock unlimited date storage.{' '}
          <LinkButton.Root variant="primary" size="small" underline>
            Upgrade
          </LinkButton.Root>
        </p>
      </div>
    </div>
  );
}`;
