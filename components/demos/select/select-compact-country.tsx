'use client';

import * as Select from '@/components/ui/select';

const countries = [
  {
    value: 'us',
    label: 'US',
    flag: '/flags/US.svg',
  },
  {
    value: 'tr',
    label: 'TR',
    flag: '/flags/TR.svg',
  },
  {
    value: 'gb',
    label: 'GB',
    flag: '/flags/GB.svg',
  },
  {
    value: 'de',
    label: 'DE',
    flag: '/flags/DE.svg',
  },
];

export default function SelectCompactCountry() {
  return (
    <Select.Root variant='compact' defaultValue='us'>
      <Select.Trigger>
        <Select.TriggerIcon
          style={{ backgroundImage: 'url(/flags/US.svg)' }}
          className='rounded-sm bg-cover bg-center'
        />
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {countries.map((country) => (
          <Select.Item key={country.value} value={country.value}>
            <Select.ItemIcon
              style={{ backgroundImage: `url(${country.flag})` }}
              className='rounded-sm bg-cover bg-center'
            />
            {country.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

export const code = `'use client';

import * as Select from '@/components/ui/select';

const countries = [
  {
    value: 'us',
    label: 'US',
    flag: '/flags/US.svg',
  },
  {
    value: 'tr',
    label: 'TR',
    flag: '/flags/TR.svg',
  },
];

export function SelectCompactCountry() {
  return (
    <Select.Root variant='compact' defaultValue='us'>
      <Select.Trigger>
        <Select.TriggerIcon
          style={{ backgroundImage: 'url(/flags/US.svg)' }}
          className='rounded-sm bg-cover bg-center'
        />
        <Select.Value />
      </Select.Trigger>
      <Select.Content>
        {countries.map((country) => (
          <Select.Item key={country.value} value={country.value}>
            <Select.ItemIcon
              style={{ backgroundImage: \`url(\${country.flag})\` }}
              className='rounded-sm bg-cover bg-center'
            />
            {country.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}`;
