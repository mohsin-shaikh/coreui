'use client';

import * as Input from '@/components/ui/input';
import * as Select from '@/components/ui/select';

const currencies = [
  { value: 'eur', label: '€' },
  { value: 'usd', label: '$' },
  { value: 'gbp', label: '£' },
];

function CurrencySelect({ size }: { size: 'medium' | 'small' | 'xsmall' }) {
  return (
    <Input.Root size={size}>
      <Select.Root variant='compactForInput' size={size} defaultValue='eur'>
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
  );
}

export default function SelectCompactForInputSize() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-4'>
      <CurrencySelect size='medium' />
      <CurrencySelect size='small' />
      <CurrencySelect size='xsmall' />
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

function CurrencySelect({ size }: { size: 'medium' | 'small' | 'xsmall' }) {
  return (
    <Input.Root size={size}>
      <Select.Root variant='compactForInput' size={size} defaultValue='eur'>
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
  );
}

export function SelectCompactForInputSize() {
  return (
    <div className='flex w-full max-w-[300px] flex-col gap-4'>
      <CurrencySelect size='medium' />
      <CurrencySelect size='small' />
      <CurrencySelect size='xsmall' />
    </div>
  );
}`;
