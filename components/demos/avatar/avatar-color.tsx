import * as Avatar from '@/components/ui/avatar';

export default function AvatarColor() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar.Root color="gray">EW</Avatar.Root>
      <Avatar.Root color="yellow">EW</Avatar.Root>
      <Avatar.Root color="blue">EW</Avatar.Root>
      <Avatar.Root color="sky">EW</Avatar.Root>
      <Avatar.Root color="purple">EW</Avatar.Root>
      <Avatar.Root color="red">EW</Avatar.Root>
    </div>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';

export default function AvatarColor() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar.Root color="gray">EW</Avatar.Root>
      <Avatar.Root color="yellow">EW</Avatar.Root>
      <Avatar.Root color="blue">EW</Avatar.Root>
      <Avatar.Root color="sky">EW</Avatar.Root>
      <Avatar.Root color="purple">EW</Avatar.Root>
      <Avatar.Root color="red">EW</Avatar.Root>
    </div>
  );
}`;
