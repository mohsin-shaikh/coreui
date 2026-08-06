import * as Input from '@/components/ui/input';

export default function InputInlineAffix() {
  return (
    <div className='w-full max-w-sm'>
      <Input.Root>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}

export const code = `import * as Input from '@/components/ui/input';

export function InputInlineAffix() {
  return (
    <div className='w-full max-w-sm'>
      <Input.Root>
        <Input.Wrapper>
          <Input.InlineAffix>€</Input.InlineAffix>
          <Input.Input placeholder='0.00' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}`;
