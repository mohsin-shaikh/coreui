import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonModifiable() {
  return (
    <p className="text-primary-base">
      <LinkButton.Root variant="modifiable">Link Button</LinkButton.Root>
    </p>
  );
}

export const code = `import * as LinkButton from '@/components/ui/link-button';

export default function LinkButtonModifiable() {
  return (
    <p className="text-primary-base">
      <LinkButton.Root variant="modifiable">Link Button</LinkButton.Root>
    </p>
  );
}`;
