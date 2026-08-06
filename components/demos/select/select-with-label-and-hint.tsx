'use client';

import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';

const fruits = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'carrot',
    label: 'Carrot',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'broccoli',
    label: 'Broccoli',
  },
];

export default function SelectWithLabelAndHint() {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='fruit'>Fruit</Label.Root>

        <Select.Root>
          <Select.Trigger id='fruit'>
            <Select.Value placeholder='Select your favorite fruit...' />
          </Select.Trigger>
          <Select.Content>
            {fruits.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is a hint text to help user.
        </Hint.Root>
      </div>
    </div>
  );
}

export const code = `'use client';

import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';
import * as Label from '@/components/ui/label';
import * as Select from '@/components/ui/select';

const fruits = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'carrot',
    label: 'Carrot',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'broccoli',
    label: 'Broccoli',
  },
];

export function SelectWithLabelAndHint() {
  return (
    <div className='w-full max-w-[300px]'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='fruit'>Fruit</Label.Root>

        <Select.Root>
          <Select.Trigger id='fruit'>
            <Select.Value placeholder='Select your favorite fruit...' />
          </Select.Trigger>
          <Select.Content className='w-[var(--radix-select-trigger-width)] max-w-[var(--radix-select-trigger-width)]'>
            {fruits.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>

        <Hint.Root>
          <Hint.Icon as={RiInformationFill} />
          This is a hint text to help user.
        </Hint.Root>
      </div>
    </div>
  );
}`;
