import * as Divider from '@/components/ui/divider';

export default function DividerContent() {
  return (
    <div className="w-full max-w-96">
      <Divider.Root variant="content">
        <span className="text-paragraph-sm text-text-sub-600">Content divider</span>
      </Divider.Root>
    </div>
  );
}

export const code = `import * as Divider from '@/components/ui/divider';

export default function DividerContent() {
  return (
    <div className="w-full max-w-96">
      <Divider.Root variant="content">
        <span className="text-paragraph-sm text-text-sub-600">Content divider</span>
      </Divider.Root>
    </div>
  );
}`;
