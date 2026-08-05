import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonUnderline() {
  return (
    <>
      <LinkButton.Root variant="gray" underline>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="black" underline>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="primary" underline>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="error" underline>
        Link Button
      </LinkButton.Root>
    </>
  );
}

export const code = `import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonUnderline() {
  return (
    <>
      <LinkButton.Root variant="gray" underline>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="black" underline>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="primary" underline>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="error" underline>
        Link Button
      </LinkButton.Root>
    </>
  );
}`;
