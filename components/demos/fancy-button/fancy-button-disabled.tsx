import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonDisabled() {
  return (
    <>
      <FancyButton.Root variant="neutral" disabled>
        Button
      </FancyButton.Root>
      <FancyButton.Root variant="primary" disabled>
        Button
      </FancyButton.Root>
      <FancyButton.Root variant="destructive" disabled>
        Button
      </FancyButton.Root>
      <FancyButton.Root variant="basic" disabled>
        Button
      </FancyButton.Root>
    </>
  );
}

export const code = `import * as FancyButton from '@/components/ui/fancy-button';

export default function FancyButtonDisabled() {
  return (
    <>
      <FancyButton.Root variant="neutral" disabled>
        Button
      </FancyButton.Root>
      <FancyButton.Root variant="primary" disabled>
        Button
      </FancyButton.Root>
      <FancyButton.Root variant="destructive" disabled>
        Button
      </FancyButton.Root>
      <FancyButton.Root variant="basic" disabled>
        Button
      </FancyButton.Root>
    </>
  );
}`;
