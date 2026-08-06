import { RiCheckboxCircleFill } from '@remixicon/react';

import { StatusBadgeExamples } from './status-badge-example';

export default function StatusBadgeCompleted() {
  return (
    <StatusBadgeExamples status="completed" icon={RiCheckboxCircleFill} />
  );
}

export const code = `import { RiCheckboxCircleFill } from '@remixicon/react';

import { StatusBadgeExamples } from '@/components/demos/status-badge/status-badge-example';

export default function StatusBadgeCompleted() {
  return (
    <StatusBadgeExamples status="completed" icon={RiCheckboxCircleFill} />
  );
}`;
