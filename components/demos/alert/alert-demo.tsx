import { RiInformationFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as LinkButton from '@/components/ui/link-button';

export default function AlertDemo() {
  return (
    <div className="w-full max-w-96">
      <Alert.Root variant="filled" status="information">
        <Alert.Icon as={RiInformationFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  );
}

export const code = `import { RiInformationFill } from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as LinkButton from '@/components/ui/link-button';

export function AlertDemo() {
  return (
    <div className='w-full max-w-96'>
      <Alert.Root variant='filled' status='information'>
        <Alert.Icon as={RiInformationFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>
    </div>
  );
}`;
