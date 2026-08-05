import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonSize() {
  return (
    <>
      <FancyButton.Root size="medium">Button</FancyButton.Root>
      <FancyButton.Root size="small">Button</FancyButton.Root>
      <FancyButton.Root size="xsmall">Button</FancyButton.Root>
    </>
  );
}

export const code = `import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonSize() {
  return (
    <>
      <FancyButton.Root size="medium">Button</FancyButton.Root>
      <FancyButton.Root size="small">Button</FancyButton.Root>
      <FancyButton.Root size="xsmall">Button</FancyButton.Root>
    </>
  );
}`;
