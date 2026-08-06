'use client';

import * as Select from '@/components/ui/select';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
];

export default function SelectDemo() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder='Select your favorite fruit...' />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export const code = `'use client';

import * as Select from '@/components/ui/select';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
];

export function SelectDemo() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder='Select your favorite fruit...' />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}`;
