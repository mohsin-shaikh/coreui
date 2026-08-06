'use client';

import { RiGlobalLine } from '@remixicon/react';

import * as Select from '@/components/ui/select';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'tr', label: 'Türkiye' },
  { value: 'gb', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
];

export default function SelectInlineCountry() {
  return (
    <Select.Root variant='inline'>
      <Select.Trigger>
        <Select.TriggerIcon as={RiGlobalLine} />
        <Select.Value placeholder='Select' />
      </Select.Trigger>
      <Select.Content>
        {countries.map((country) => (
          <Select.Item key={country.value} value={country.value}>
            {country.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

export const code = `'use client';

import { RiGlobalLine } from '@remixicon/react';

import * as Select from '@/components/ui/select';

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'tr', label: 'Türkiye' },
  { value: 'gb', label: 'United Kingdom' },
];

export function SelectInlineCountry() {
  return (
    <Select.Root variant='inline'>
      <Select.Trigger>
        <Select.TriggerIcon as={RiGlobalLine} />
        <Select.Value placeholder='Select' />
      </Select.Trigger>
      <Select.Content>
        {countries.map((country) => (
          <Select.Item key={country.value} value={country.value}>
            {country.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}`;
