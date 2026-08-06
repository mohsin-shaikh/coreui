import * as Label from '@/components/ui/label';

export default function LabelDemo() {
  return (
    <Label.Root htmlFor='last-name'>
      Last Name
      <Label.Asterisk />
      <Label.Sub>(Optional)</Label.Sub>
    </Label.Root>
  );
}

export const code = `import * as Label from '@/components/ui/label';

export function LabelDemo() {
  return (
    <Label.Root htmlFor='last-name'>
      Last Name
      <Label.Asterisk />
      <Label.Sub>(Optional)</Label.Sub>
    </Label.Root>
  );
}`;
