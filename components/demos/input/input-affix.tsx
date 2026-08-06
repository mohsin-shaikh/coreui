import * as Input from '@/components/ui/input';

export default function InputAffix() {
  return (
    <div className='flex w-full max-w-sm flex-col gap-4'>
      <Input.Root>
        <Input.Affix>https://</Input.Affix>
        <Input.Wrapper>
          <Input.Input placeholder='www.example.com' />
        </Input.Wrapper>
      </Input.Root>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input placeholder='username' />
        </Input.Wrapper>
        <Input.Affix>@gmail.com</Input.Affix>
      </Input.Root>
    </div>
  );
}

export const code = `import * as Input from '@/components/ui/input';

export function InputAffix() {
  return (
    <div className='flex w-full max-w-sm flex-col gap-4'>
      <Input.Root>
        <Input.Affix>https://</Input.Affix>
        <Input.Wrapper>
          <Input.Input placeholder='www.example.com' />
        </Input.Wrapper>
      </Input.Root>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input placeholder='username' />
        </Input.Wrapper>
        <Input.Affix>@gmail.com</Input.Affix>
      </Input.Root>
    </div>
  );
}`;
