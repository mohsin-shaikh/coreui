import * as Divider from '@/components/ui/divider';

export default function DividerSolidText() {
  return (
    <div className="w-full max-w-96">
      <Divider.Root variant="solid-text">Amount &amp; Account</Divider.Root>
    </div>
  );
}

export const code = `import * as Divider from '@/components/ui/divider';

export default function DividerSolidText() {
  return (
    <div className="w-full max-w-96">
      <Divider.Root variant="solid-text">Amount & Account</Divider.Root>
    </div>
  );
}`;
