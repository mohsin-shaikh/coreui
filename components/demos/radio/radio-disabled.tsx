import * as Radio from '@/components/ui/radio';

export default function RadioDisabled() {
  return (
    <Radio.Group defaultValue='option-3' className='flex items-center gap-6'>
      <Radio.Item value='option-1' disabled aria-label='Disabled option 1' />
      <Radio.Item value='option-2' disabled aria-label='Disabled option 2' />
      <Radio.Item value='option-3' disabled aria-label='Disabled checked option 3' />
    </Radio.Group>
  );
}

export const code = `import * as Radio from '@/components/ui/radio';

export function RadioDisabled() {
  return (
    <Radio.Group defaultValue='option-1' className='flex items-center gap-6'>
      <Radio.Item value='option-1' disabled aria-label='Disabled option 1' />
      <Radio.Item value='option-2' disabled aria-label='Disabled option 2' />
      <Radio.Item
        value='option-3'
        defaultChecked
        disabled
        aria-label='Disabled checked option 3'
      />
    </Radio.Group>
  );
}`;
