import * as Button from '@/components/ui/button';

export default function ButtonSize() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root size="medium">Medium</Button.Root>
        <Button.Root size="small">Small</Button.Root>
        <Button.Root size="xsmall">Xsmall</Button.Root>
        <Button.Root size="xxsmall">Xxsmall</Button.Root>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root mode="stroke" size="medium">
          Medium
        </Button.Root>
        <Button.Root mode="stroke" size="small">
          Small
        </Button.Root>
        <Button.Root mode="stroke" size="xsmall">
          Xsmall
        </Button.Root>
        <Button.Root mode="stroke" size="xxsmall">
          Xxsmall
        </Button.Root>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root mode="lighter" size="medium">
          Medium
        </Button.Root>
        <Button.Root mode="lighter" size="small">
          Small
        </Button.Root>
        <Button.Root mode="lighter" size="xsmall">
          Xsmall
        </Button.Root>
        <Button.Root mode="lighter" size="xxsmall">
          Xxsmall
        </Button.Root>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root mode="ghost" size="medium">
          Medium
        </Button.Root>
        <Button.Root mode="ghost" size="small">
          Small
        </Button.Root>
        <Button.Root mode="ghost" size="xsmall">
          Xsmall
        </Button.Root>
        <Button.Root mode="ghost" size="xxsmall">
          Xxsmall
        </Button.Root>
      </div>
    </div>
  );
}

export const code = `import * as Button from '@/components/ui/button';

export default function ButtonSize() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root size="medium">Medium</Button.Root>
        <Button.Root size="small">Small</Button.Root>
        <Button.Root size="xsmall">Xsmall</Button.Root>
        <Button.Root size="xxsmall">Xxsmall</Button.Root>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root mode="stroke" size="medium">
          Medium
        </Button.Root>
        <Button.Root mode="stroke" size="small">
          Small
        </Button.Root>
        <Button.Root mode="stroke" size="xsmall">
          Xsmall
        </Button.Root>
        <Button.Root mode="stroke" size="xxsmall">
          Xxsmall
        </Button.Root>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root mode="lighter" size="medium">
          Medium
        </Button.Root>
        <Button.Root mode="lighter" size="small">
          Small
        </Button.Root>
        <Button.Root mode="lighter" size="xsmall">
          Xsmall
        </Button.Root>
        <Button.Root mode="lighter" size="xxsmall">
          Xxsmall
        </Button.Root>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button.Root mode="ghost" size="medium">
          Medium
        </Button.Root>
        <Button.Root mode="ghost" size="small">
          Small
        </Button.Root>
        <Button.Root mode="ghost" size="xsmall">
          Xsmall
        </Button.Root>
        <Button.Root mode="ghost" size="xxsmall">
          Xxsmall
        </Button.Root>
      </div>
    </div>
  );
}`;
