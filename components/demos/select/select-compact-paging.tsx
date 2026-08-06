'use client';

import * as Select from '@/components/ui/select';

const pages = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

export default function SelectCompactPaging() {
  return (
    <Select.Root variant='compact' defaultValue='1'>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {pages.map((page) => (
          <Select.Item key={page.value} value={page.value}>
            {page.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

export const code = `'use client';

import * as Select from '@/components/ui/select';

const pages = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

export function SelectCompactPaging() {
  return (
    <Select.Root variant='compact' defaultValue='1'>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {pages.map((page) => (
          <Select.Item key={page.value} value={page.value}>
            {page.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}`;
