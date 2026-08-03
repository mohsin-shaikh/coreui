import * as Button from '@/components/ui/button';

export default function ButtonFullWidth() {
  return (
    <div className="w-full max-w-sm">
      <Button.Root className="w-full" variant="neutral" mode="stroke">
        Learn More
      </Button.Root>
    </div>
  );
}

export const code = `import * as Button from '@/components/ui/button';

export default function ButtonFullWidth() {
  return (
    <Button.Root className="w-full" variant="neutral" mode="stroke">
      Learn More
    </Button.Root>
  );
}`;
