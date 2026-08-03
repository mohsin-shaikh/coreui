import * as Button from '@/components/ui/button';

export default function ButtonNeutral() {
  return (
    <>
      <Button.Root variant="neutral" mode="filled">
        Learn More
      </Button.Root>
      <Button.Root variant="neutral" mode="stroke">
        Learn More
      </Button.Root>
      <Button.Root variant="neutral" mode="lighter">
        Learn More
      </Button.Root>
      <Button.Root variant="neutral" mode="ghost">
        Learn More
      </Button.Root>
    </>
  );
}

export const code = `import * as Button from '@/components/ui/button';

export default function ButtonNeutral() {
  return (
    <>
      <Button.Root variant="neutral" mode="filled">
        Learn More
      </Button.Root>
      <Button.Root variant="neutral" mode="stroke">
        Learn More
      </Button.Root>
      <Button.Root variant="neutral" mode="lighter">
        Learn More
      </Button.Root>
      <Button.Root variant="neutral" mode="ghost">
        Learn More
      </Button.Root>
    </>
  );
}`;
