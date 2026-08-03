import { ArrowRight } from 'lucide-react';

import * as Button from '@/components/ui/button';

export default function ButtonWithIcon() {
  return (
    <Button.Root>
      Button
      <Button.Icon as={ArrowRight} />
    </Button.Root>
  );
}

export const code = `import { ArrowRight } from 'lucide-react';

import * as Button from '@/components/ui/button';

export default function ButtonWithIcon() {
  return (
    <Button.Root>
      Button
      <Button.Icon as={ArrowRight} />
    </Button.Root>
  );
}`;
