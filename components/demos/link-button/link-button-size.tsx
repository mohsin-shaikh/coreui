import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonSize() {
  return (
    <>
      <LinkButton.Root size="medium">Link Button</LinkButton.Root>
      <LinkButton.Root size="small">Link Button</LinkButton.Root>
    </>
  );
}

export const code = `import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonSize() {
  return (
    <>
      <LinkButton.Root size="medium">Link Button</LinkButton.Root>
      <LinkButton.Root size="small">Link Button</LinkButton.Root>
    </>
  );
}`;
