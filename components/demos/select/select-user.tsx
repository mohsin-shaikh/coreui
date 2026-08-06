'use client';

import * as Avatar from '@/components/ui/avatar';
import * as Select from '@/components/ui/select';

const users = [
  {
    value: 'sophia',
    label: 'Sophia Williams',
    avatar: '/images/avatar/illustration/sophia.png',
    color: 'yellow' as const,
  },
  {
    value: 'james',
    label: 'James Brown',
    avatar: '/images/avatar/illustration/james.png',
    color: 'gray' as const,
  },
  {
    value: 'arthur',
    label: 'Arthur Taylor',
    avatar: '/images/avatar/illustration/arthur.png',
    color: 'blue' as const,
  },
  {
    value: 'emma',
    label: 'Emma Laurent',
    avatar: '/images/avatar/illustration/emma.png',
    color: 'purple' as const,
  },
];

export default function SelectUser() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder='Select a user...' />
        </Select.Trigger>
        <Select.Content>
          {users.map((user) => (
            <Select.Item key={user.value} value={user.value}>
              <Avatar.Root size='24' color={user.color}>
                <Avatar.Image src={user.avatar} alt={user.label} />
              </Avatar.Root>
              {user.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export const code = `'use client';

import * as Avatar from '@/components/ui/avatar';
import * as Select from '@/components/ui/select';

const users = [
  {
    value: 'sophia',
    label: 'Sophia Williams',
    avatar: '/images/avatar/illustration/sophia.png',
    color: 'yellow' as const,
  },
  {
    value: 'james',
    label: 'James Brown',
    avatar: '/images/avatar/illustration/james.png',
    color: 'gray' as const,
  },
];

export function SelectUser() {
  return (
    <div className='w-full max-w-[300px]'>
      <Select.Root>
        <Select.Trigger>
          <Select.Value placeholder='Select a user...' />
        </Select.Trigger>
        <Select.Content>
          {users.map((user) => (
            <Select.Item key={user.value} value={user.value}>
              <Avatar.Root size='24' color={user.color}>
                <Avatar.Image src={user.avatar} alt={user.label} />
              </Avatar.Root>
              {user.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}`;
