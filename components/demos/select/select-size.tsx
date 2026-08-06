'use client';

import * as Select from '@/components/ui/select';

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
];

export default function SelectSize() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-4'>
      <Select.Root size='medium'>
        <Select.Trigger>
          <Select.Value placeholder='Medium' />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Select.Root size='small'>
        <Select.Trigger>
          <Select.Value placeholder='Small' />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Select.Root size='xsmall'>
        <Select.Trigger>
          <Select.Value placeholder='Xsmall' />
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
];

export function SelectSize() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-4'>
      <Select.Root size='medium'>
        <Select.Trigger>
          <Select.Value placeholder='Medium' />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Select.Root size='small'>
        <Select.Trigger>
          <Select.Value placeholder='Small' />
        </Select.Trigger>
        <Select.Content>
          {fruits.map((fruit) => (
            <Select.Item key={fruit.value} value={fruit.value}>
              {fruit.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Select.Root size='xsmall'>
        <Select.Trigger>
          <Select.Value placeholder='Xsmall' />
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
