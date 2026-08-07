'use client';

import * as Select from '@/components/ui/select';
import { assetPath } from '@/lib/shared';

const countries = [
  {
    value: 'us',
    label: 'US',
    flag: assetPath('/flags/US.svg'),
  },
  {
    value: 'tr',
    label: 'TR',
    flag: assetPath('/flags/TR.svg'),
  },
  {
    value: 'gb',
    label: 'GB',
    flag: assetPath('/flags/GB.svg'),
  },
  {
    value: 'de',
    label: 'DE',
    flag: assetPath('/flags/DE.svg'),
  },
];

export default function SelectCompactCountry() {
  return (
    <Select.Root variant='compact' defaultValue='us'>
      <Select.Trigger>
        <Select.TriggerIcon
          style={{ backgroundImage: `url(${assetPath('/flags/US.svg')})` }}
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
