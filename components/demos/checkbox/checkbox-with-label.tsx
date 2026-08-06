import * as Checkbox from '@/components/ui/checkbox';
import * as Label from '@/components/ui/label';

export default function CheckboxWithLabel() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox.Root id="sms" />
        <Label.Root htmlFor="sms">SMS Verification</Label.Root>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox.Root id="authenticator" />
        <Label.Root htmlFor="authenticator">Authenticator App</Label.Root>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox.Root id="disabled" disabled />
        <Label.Root htmlFor="disabled" disabled>
          Disabled
        </Label.Root>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox.Root id="disabled-checked" defaultChecked disabled />
        <Label.Root htmlFor="disabled-checked" disabled>
          Disabled but default checked
        </Label.Root>
      </div>
    </div>
  );
}

export const code = `import * as Checkbox from '@/components/ui/checkbox';
import * as Label from '@/components/ui/label';

export function CheckboxWithLabel() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id='sms' />
        <Label.Root htmlFor='sms'>SMS Verification</Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id='authenticator' />
        <Label.Root htmlFor='authenticator'>Authenticator App</Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id='disabled' disabled />
        <Label.Root htmlFor='disabled' disabled>
          Disabled
        </Label.Root>
      </div>
      <div className='flex items-center gap-2'>
        <Checkbox.Root id='disabled-checked' defaultChecked disabled />
        <Label.Root htmlFor='disabled-checked' disabled>
          Disabled but default checked
        </Label.Root>
      </div>
    </div>
  );
}`;
