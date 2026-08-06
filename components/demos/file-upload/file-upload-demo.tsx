import { RiUploadCloud2Line } from '@remixicon/react';

import * as FileUpload from '@/components/ui/file-upload';

export default function FileUploadDemo() {
  return (
    <FileUpload.Root className='w-full max-w-md'>
      <FileUpload.Icon as={RiUploadCloud2Line} />
      <div className='space-y-1'>
        <div className='text-label-sm text-text-strong-950'>
          Choose a file or drag & drop it here.
        </div>
        <div className='text-paragraph-xs text-text-sub-600'>
          JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
        </div>
      </div>
      <FileUpload.Button>Browse File</FileUpload.Button>
      <input type='file' className='hidden' />
    </FileUpload.Root>
  );
}

export const code = `import { RiUploadCloud2Line } from '@remixicon/react';

import * as FileUpload from '@/components/ui/file-upload';

export function FileUploadDemo() {
  return (
    <FileUpload.Root className='w-full max-w-md'>
      <FileUpload.Icon as={RiUploadCloud2Line} />
      <div className='space-y-1'>
        <div className='text-label-sm text-text-strong-950'>
          Choose a file or drag & drop it here.
        </div>
        <div className='text-paragraph-xs text-text-sub-600'>
          JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
        </div>
      </div>
      <FileUpload.Button>Browse File</FileUpload.Button>
      <input type='file' className='hidden' />
    </FileUpload.Root>
  );
}`;
