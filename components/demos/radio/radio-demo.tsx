import * as Radio from '@/components/ui/radio';

export default function RadioDemo() {
  return (
    <Radio.Group defaultValue='option-1' className='flex items-center gap-6'>
      <Radio.Item value='option-1' aria-label='Option 1' />
      <Radio.Item value='option-2' aria-label='Option 2' />
      <Radio.Item value='option-3' aria-label='Option 3' />
    </Radio.Group>
  );
}

export const code = `import * as Radio from '@/components/ui/radio';

export function RadioDemo() {
  return (
    <Radio.Group defaultValue='option-1' className='flex items-center gap-6'>
      <Radio.Item value='option-1' aria-label='Option 1' />
      <Radio.Item value='option-2' aria-label='Option 2' />
      <Radio.Item value='option-3' aria-label='Option 3' />
    </Radio.Group>
  );
}`;
