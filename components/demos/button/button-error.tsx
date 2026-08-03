import * as Button from '@/components/ui/button';

export default function ButtonError() {
  return (
    <>
      <Button.Root variant="error" mode="filled">
        Try Again
      </Button.Root>
      <Button.Root variant="error" mode="stroke">
        Try Again
      </Button.Root>
      <Button.Root variant="error" mode="lighter">
        Try Again
      </Button.Root>
      <Button.Root variant="error" mode="ghost">
        Try Again
      </Button.Root>
    </>
  );
}

export const code = `import * as Button from '@/components/ui/button';

export default function ButtonError() {
  return (
    <>
      <Button.Root variant="error" mode="filled">
        Try Again
      </Button.Root>
      <Button.Root variant="error" mode="stroke">
        Try Again
      </Button.Root>
      <Button.Root variant="error" mode="lighter">
        Try Again
      </Button.Root>
      <Button.Root variant="error" mode="ghost">
        Try Again
      </Button.Root>
    </>
  );
}`;
