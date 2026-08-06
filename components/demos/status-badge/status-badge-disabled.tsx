import { RiProhibitedLine } from '@remixicon/react';

import { StatusBadgeExamples } from './status-badge-example';

export default function StatusBadgeDisabled() {
  return (
    <StatusBadgeExamples status="disabled" icon={RiProhibitedLine} />
  );
}

export const code = `import { RiProhibitedLine } from '@remixicon/react';

import { StatusBadgeExamples } from '@/components/demos/status-badge/status-badge-example';

export default function StatusBadgeDisabled() {
  return (
    <StatusBadgeExamples status="disabled" icon={RiProhibitedLine} />
  );
}`;
