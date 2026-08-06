import { RiTimeFill } from '@remixicon/react';

import { StatusBadgeExamples } from './status-badge-example';

export default function StatusBadgePending() {
  return <StatusBadgeExamples status="pending" icon={RiTimeFill} />;
}

export const code = `import { RiTimeFill } from '@remixicon/react';

import { StatusBadgeExamples } from '@/components/demos/status-badge/status-badge-example';

export default function StatusBadgePending() {
  return <StatusBadgeExamples status="pending" icon={RiTimeFill} />;
}`;
