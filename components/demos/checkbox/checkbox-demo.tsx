import * as Checkbox from '@/components/ui/checkbox';

export default function CheckboxDemo() {
  return <Checkbox.Root aria-label="Checkbox" />;
}

export const code = `import * as Checkbox from '@/components/ui/checkbox';

export function CheckboxDemo() {
  return <Checkbox.Root aria-label='Checkbox' />;
}`;
