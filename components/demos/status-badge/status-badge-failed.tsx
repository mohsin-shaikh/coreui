import { RiCloseCircleFill } from '@remixicon/react';

import { StatusBadgeExamples } from './status-badge-example';

export default function StatusBadgeFailed() {
  return <StatusBadgeExamples status="failed" icon={RiCloseCircleFill} />;
}

export const code = `import { RiCloseCircleFill } from '@remixicon/react';

import { StatusBadgeExamples } from '@/components/demos/status-badge/status-badge-example';

export default function StatusBadgeFailed() {
  return <StatusBadgeExamples status="failed" icon={RiCloseCircleFill} />;
}`;
