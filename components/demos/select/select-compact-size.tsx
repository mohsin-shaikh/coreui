'use client';

import * as Select from '@/components/ui/select';

const currencies = [
  { value: 'eur', label: '€' },
  { value: 'usd', label: '$' },
  { value: 'gbp', label: '£' },
];

export default function SelectCompactSize() {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Select.Root variant='compact' size='medium' defaultValue='eur'>
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
      <Select.Root variant='compact' size='small' defaultValue='eur'>
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
      <Select.Root variant='compact' size='xsmall' defaultValue='eur'>
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
    </div>
  );
}

export const code = `'use client';

import * as Select from '@/components/ui/select';

const currencies = [
  { value: 'eur', label: '€' },
  { value: 'usd', label: '$' },
  { value: 'gbp', label: '£' },
];

export function SelectCompactSize() {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Select.Root variant='compact' size='medium' defaultValue='eur'>
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
      <Select.Root variant='compact' size='small' defaultValue='eur'>
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
      <Select.Root variant='compact' size='xsmall' defaultValue='eur'>
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
    </div>
  );
}`;
