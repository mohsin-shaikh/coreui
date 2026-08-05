import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonDisabled() {
  return (
    <>
      <LinkButton.Root variant="gray" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="black" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="primary" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="error" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="gray" underline disabled>
        Link Button
      </LinkButton.Root>
    </>
  );
}

export const code = `import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonDisabled() {
  return (
    <>
      <LinkButton.Root variant="gray" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="black" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="primary" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="error" disabled>
        Link Button
      </LinkButton.Root>
      <LinkButton.Root variant="gray" underline disabled>
        Link Button
      </LinkButton.Root>
    </>
  );
}`;
