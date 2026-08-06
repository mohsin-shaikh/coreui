import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as LinkButton from '@/components/ui/link-button';

export default function AlertSizeXsmall() {
  return (
    <div className="w-full max-w-96 space-y-6">
      <Alert.Root variant="filled" status="error" size="xsmall">
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="warning" size="xsmall">
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="success" size="xsmall">
        <Alert.Icon as={RiCheckboxCircleFill} />
        Insert your alert title here!
        <LinkButton.Root variant="modifiable" size="medium" underline>
          Upgrade
        </LinkButton.Root>
        <button type="button">
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant="filled" status="information" size="xsmall">
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

export const code = `import {
  RiAlertFill,
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiInformationFill,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as LinkButton from '@/components/ui/link-button';

export function AlertSizeXsmall() {
  return (
    <div className='w-full max-w-96 space-y-6'>
      <Alert.Root variant='filled' status='error' size='xsmall'>
        <Alert.Icon as={RiErrorWarningFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant='filled' status='warning' size='xsmall'>
        <Alert.Icon as={RiAlertFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant='filled' status='success' size='xsmall'>
        <Alert.Icon as={RiCheckboxCircleFill} />
        Insert your alert title here!
        <LinkButton.Root variant='modifiable' size='medium' underline>
          Upgrade
        </LinkButton.Root>
        <button type='button'>
          <Alert.CloseIcon />
        </button>
      </Alert.Root>

      <Alert.Root variant='filled' status='information' size='xsmall'>
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
