import type { ElementType } from 'react';

import * as StatusBadge from '@/components/ui/status-badge';
import type { statusBadgeVariants } from '@/components/ui/status-badge';
import type { VariantProps } from '@/utils/tv';

type StatusBadgeExamplesProps = {
  status: NonNullable<VariantProps<typeof statusBadgeVariants>['status']>;
  icon: ElementType;
};

export function StatusBadgeExamples({
  status,
  icon: Icon,
}: StatusBadgeExamplesProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <StatusBadge.Root status={status}>
        <StatusBadge.Dot />
        Badge
      </StatusBadge.Root>
      <StatusBadge.Root status={status} variant="light">
        <StatusBadge.Dot />
        Badge
      </StatusBadge.Root>
      <StatusBadge.Root status={status}>
        <StatusBadge.Icon as={Icon} />
        Badge
      </StatusBadge.Root>
      <StatusBadge.Root status={status} variant="light">
        <StatusBadge.Icon as={Icon} />
        Badge
      </StatusBadge.Root>
    </div>
  );
}
