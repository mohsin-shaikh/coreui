import * as Button from '@/components/ui/button';

export default function ButtonDisabled() {
  return (
    <>
      <Button.Root disabled mode="filled">
        Disabled
      </Button.Root>
      <Button.Root disabled mode="stroke">
        Disabled
      </Button.Root>
      <Button.Root disabled mode="lighter">
        Disabled
      </Button.Root>
      <Button.Root disabled mode="ghost">
        Disabled
      </Button.Root>
    </>
  );
}

export const code = `import * as Button from '@/components/ui/button';

export default function ButtonDisabled() {
  return (
    <>
      <Button.Root disabled mode="filled">
        Disabled
      </Button.Root>
      <Button.Root disabled mode="stroke">
        Disabled
      </Button.Root>
      <Button.Root disabled mode="lighter">
        Disabled
      </Button.Root>
      <Button.Root disabled mode="ghost">
        Disabled
      </Button.Root>
    </>
  );
}`;
