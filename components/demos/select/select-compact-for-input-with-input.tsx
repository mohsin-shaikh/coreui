'use client';

import * as Input from '@/components/ui/input';
import * as Select from '@/components/ui/select';

const currencies = [
  { value: 'eur', label: '€' },
  { value: 'usd', label: '$' },
  { value: 'gbp', label: '£' },
];

export default function SelectCompactForInputWithInput() {
  return (
    <div className='w-full max-w-[300px]'>
      <Input.Root>
        <Select.Root variant='compactForInput' defaultValue='eur'>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {currencies.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Input.Wrapper>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}

export const code = `'use client';

import * as Input from '@/components/ui/input';
import * as Select from '@/components/ui/select';

const currencies = [
  { value: 'eur', label: '€' },
  { value: 'usd', label: '$' },
  { value: 'gbp', label: '£' },
];

export function SelectCompactForInputWithInput() {
  return (
    <div className='w-full max-w-[300px]'>
      <Input.Root>
        <Select.Root variant='compactForInput' defaultValue='eur'>
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            {currencies.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
        <Input.Wrapper>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}`;
