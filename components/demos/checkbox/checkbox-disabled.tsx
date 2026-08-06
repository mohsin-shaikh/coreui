import * as Checkbox from '@/components/ui/checkbox';

export default function CheckboxDisabled() {
  return (
    <div className="flex items-center gap-6">
      <Checkbox.Root disabled aria-label="Disabled checkbox" />
      <Checkbox.Root defaultChecked disabled aria-label="Disabled checked checkbox" />
    </div>
  );
}

export const code = `import * as Checkbox from '@/components/ui/checkbox';

export function CheckboxDisabled() {
  return (
    <div className='flex items-center gap-6'>
      <Checkbox.Root disabled aria-label='Disabled checkbox' />
      <Checkbox.Root defaultChecked disabled aria-label='Disabled checked checkbox' />
    </div>
  );
}`;
