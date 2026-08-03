import * as Button from '@/components/ui/button';

export default function ButtonPrimary() {
  return (
    <>
      <Button.Root variant="primary" mode="filled">
        Get Started
      </Button.Root>
      <Button.Root variant="primary" mode="stroke">
        Get Started
      </Button.Root>
      <Button.Root variant="primary" mode="lighter">
        Get Started
      </Button.Root>
      <Button.Root variant="primary" mode="ghost">
        Get Started
      </Button.Root>
    </>
  );
}

export const code = `import * as Button from '@/components/ui/button';

export default function ButtonPrimary() {
  return (
    <>
      <Button.Root variant="primary" mode="filled">
        Get Started
      </Button.Root>
      <Button.Root variant="primary" mode="stroke">
        Get Started
      </Button.Root>
      <Button.Root variant="primary" mode="lighter">
        Get Started
      </Button.Root>
      <Button.Root variant="primary" mode="ghost">
        Get Started
      </Button.Root>
    </>
  );
}`;
