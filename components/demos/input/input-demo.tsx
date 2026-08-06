import * as Input from '@/components/ui/input';

export default function InputDemo() {
  return (
    <div className='w-full max-w-sm'>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input placeholder='Placeholder' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}

export const code = `import * as Input from '@/components/ui/input';

export function InputDemo() {
  return (
    <div className='w-full max-w-sm'>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input placeholder='Placeholder' />
        </Input.Wrapper>
      </Input.Root>
    </div>
  );
}`;
