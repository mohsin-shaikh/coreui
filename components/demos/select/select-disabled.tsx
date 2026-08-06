'use client';

import * as Select from '@/components/ui/select';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'tr', label: 'Türkiye' },
  { value: 'gb', label: 'United Kingdom' },
];

export default function SelectDisabled() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root disabled>
        <Select.Trigger>
          <Select.Value placeholder='Select a country...' />
        </Select.Trigger>
        <Select.Content>
          {countries.map((country) => (
            <Select.Item key={country.value} value={country.value}>
              {country.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export const code = `'use client';

import * as Select from '@/components/ui/select';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'tr', label: 'Türkiye' },
  { value: 'gb', label: 'United Kingdom' },
];

export function SelectDisabled() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root disabled>
        <Select.Trigger>
          <Select.Value placeholder='Select a country...' />
        </Select.Trigger>
        <Select.Content>
          {countries.map((country) => (
            <Select.Item key={country.value} value={country.value}>
              {country.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}`;
