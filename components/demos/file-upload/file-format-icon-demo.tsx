import * as FileFormatIcon from '@/components/ui/file-format-icon';

const pdfColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'sky',
  'blue',
  'purple',
  'pink',
  'gray',
] as const;

const docColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'sky',
  'blue',
  'purple',
  'pink',
  'gray',
] as const;

export default function FileFormatIconDemo() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap gap-4'>
        {pdfColors.map((color) => (
          <FileFormatIcon.Root key={`pdf-${color}`} format='PDF' color={color} />
        ))}
      </div>
      <div className='flex flex-wrap gap-4'>
        {docColors.map((color) => (
          <FileFormatIcon.Root key={`doc-${color}`} format='DOC' color={color} />
        ))}
      </div>
    </div>
  );
}

export const code = `import * as FileFormatIcon from '@/components/ui/file-format-icon';

const pdfColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'sky',
  'blue',
  'purple',
  'pink',
  'gray',
] as const;

const docColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'sky',
  'blue',
  'purple',
  'pink',
  'gray',
] as const;

export function FileFormatIconDemo() {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-wrap gap-4'>
        {pdfColors.map((color) => (
          <FileFormatIcon.Root key={\`pdf-\${color}\`} format='PDF' color={color} />
        ))}
      </div>
      <div className='flex flex-wrap gap-4'>
        {docColors.map((color) => (
          <FileFormatIcon.Root key={\`doc-\${color}\`} format='DOC' color={color} />
        ))}
      </div>
    </div>
  );
}`;
