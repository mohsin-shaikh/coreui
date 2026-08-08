import * as Avatar from '@/components/ui/avatar';
import * as Tag from '@/components/ui/tag';
import { assetPath } from '@/lib/shared';

export default function TagWithAvatar() {
  return (
    <div className='flex gap-6'>
      <Tag.Root>
        <Tag.Icon as={Avatar.Root}>
          <Avatar.Image
            src={assetPath('/images/avatar/illustration/james.png')}
          />
        </Tag.Icon>
        James Brown
      </Tag.Root>
    </div>
  );
}

export const code = `import * as Avatar from '@/components/ui/avatar';
import * as Tag from '@/components/ui/tag';

export function TagWithAvatar() {
  return (
    <div className='flex gap-6'>
      <Tag.Root>
        <Tag.Icon as={Avatar.Root}>
          <Avatar.Image src='/images/avatar/illustration/james.png' />
        </Tag.Icon>
        James Brown
      </Tag.Root>
    </div>
  );
}
`;
