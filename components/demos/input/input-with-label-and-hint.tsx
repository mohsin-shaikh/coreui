import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export default function InputWithLabelAndHint() {
  return (
    <div className='flex w-full max-w-sm flex-col gap-1'>
      <Label.Root htmlFor='email'>
        Email Address
        <Label.Asterisk />
        <Label.Sub>(Optional)</Label.Sub>
      </Label.Root>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input id='email' type='email' placeholder='[email protected]' />
        </Input.Wrapper>
      </Input.Root>
      <Hint.Root>
        <Hint.Icon as={RiInformationFill} />
        This is a hint text to help user.
      </Hint.Root>
    </div>
  );
}

export const code = `import { RiInformationFill } from '@remixicon/react';

import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';

export function InputWithLabelAndHint() {
  return (
    <div className='flex w-full max-w-sm flex-col gap-1'>
      <Label.Root htmlFor='email'>
        Email Address
        <Label.Asterisk />
        <Label.Sub>(Optional)</Label.Sub>
      </Label.Root>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input id='email' type='email' placeholder='[email protected]' />
        </Input.Wrapper>
      </Input.Root>
      <Hint.Root>
        <Hint.Icon as={RiInformationFill} />
        This is a hint text to help user.
      </Hint.Root>
    </div>
  );
}`;
