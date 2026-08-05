import * as Avatar from '@/components/ui/avatar';

export default function AvatarPlaceholder() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar.Root />
      <Avatar.Root placeholderType="company" />
    </div>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';

export default function AvatarPlaceholder() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar.Root />
      <Avatar.Root placeholderType="company" />
    </div>
  );
}`;
