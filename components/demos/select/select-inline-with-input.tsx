'use client';

import { RiSearchLine } from '@remixicon/react';

import * as Input from '@/components/ui/input';
import * as Select from '@/components/ui/select';

const permissions = [
  { value: 'view', label: 'can view' },
  { value: 'edit', label: 'can edit' },
];

export default function SelectInlineWithInput() {
  return (
    <div className='w-full max-w-[300px]'>
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiSearchLine} />
          <Input.Input type='email' placeholder='john@example.com' />
          <Select.Root variant='inline' defaultValue='view'>
            <Select.Trigger className='[&_span]:!gap-1'>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {permissions.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}

export const code = `'use client';

import { RiSearchLine } from '@remixicon/react';

import * as Input from '@/components/ui/input';
import * as Select from '@/components/ui/select';

const permissions = [
  { value: 'view', label: 'can view' },
  { value: 'edit', label: 'can edit' },
];

export function SelectInlineWithInput() {
  return (
    <div className='w-full max-w-[300px]'>
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiSearchLine} />
          <Input.Input type='email' placeholder='john@example.com' />
          <Select.Root variant='inline' defaultValue='view'>
            <Select.Trigger className='[&_span]:!gap-1'>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              {permissions.map((item) => (
                <Select.Item key={item.value} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}`;
