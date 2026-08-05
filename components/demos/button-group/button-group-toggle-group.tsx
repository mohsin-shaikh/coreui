'use client';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

import * as ButtonGroup from '@/components/ui/button-group';

export default function ButtonGroupToggleGroup() {
  return (
    <ToggleGroup.Root type="single" defaultValue="inter">
      <ButtonGroup.Root>
        <ToggleGroup.Item value="inter" asChild>
          <ButtonGroup.Item>Inter</ButtonGroup.Item>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="roboto" asChild>
          <ButtonGroup.Item>Roboto</ButtonGroup.Item>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="system" asChild>
          <ButtonGroup.Item>System</ButtonGroup.Item>
        </ToggleGroup.Item>
      </ButtonGroup.Root>
    </ToggleGroup.Root>
  );
}

export const code = `'use client';

import * as ToggleGroup from '@radix-ui/react-toggle-group';

import * as ButtonGroup from '@/components/ui/button-group';

export default function ButtonGroupToggleGroup() {
  return (
    <ToggleGroup.Root type="single" defaultValue="inter">
      <ButtonGroup.Root>
        <ToggleGroup.Item value="inter" asChild>
          <ButtonGroup.Item>Inter</ButtonGroup.Item>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="roboto" asChild>
          <ButtonGroup.Item>Roboto</ButtonGroup.Item>
        </ToggleGroup.Item>
        <ToggleGroup.Item value="system" asChild>
          <ButtonGroup.Item>System</ButtonGroup.Item>
        </ToggleGroup.Item>
      </ButtonGroup.Root>
    </ToggleGroup.Root>
  );
}`;
