import * as Badge from '@/components/ui/badge';

export default function BadgeSquare() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge.Root size="small" square>
          2
        </Badge.Root>
        <Badge.Root size="small" square>
          5
        </Badge.Root>
        <Badge.Root size="small" square>
          66
        </Badge.Root>
        <Badge.Root size="small" square>
          789
        </Badge.Root>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge.Root size="medium" square>
          2
        </Badge.Root>
        <Badge.Root size="medium" square>
          5
        </Badge.Root>
        <Badge.Root size="medium" square>
          66
        </Badge.Root>
        <Badge.Root size="medium" square>
          789
        </Badge.Root>
      </div>
    </div>
  );
}

export const code = `import * as Badge from '@/components/ui/badge';

export default function BadgeSquare() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge.Root size="small" square>
          2
        </Badge.Root>
        <Badge.Root size="small" square>
          5
        </Badge.Root>
        <Badge.Root size="small" square>
          66
        </Badge.Root>
        <Badge.Root size="small" square>
          789
        </Badge.Root>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge.Root size="medium" square>
          2
        </Badge.Root>
        <Badge.Root size="medium" square>
          5
        </Badge.Root>
        <Badge.Root size="medium" square>
          66
        </Badge.Root>
        <Badge.Root size="medium" square>
          789
        </Badge.Root>
      </div>
    </div>
  );
}`;
