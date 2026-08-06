'use client';

import * as React from 'react';

import * as DigitInput from '@/components/ui/digit-input';

export default function DigitInputHasError() {
  const [digitInputValue, setDigitInputValue] = React.useState('');

  return (
    <div className="w-full max-w-96">
      <DigitInput.Root
        numInputs={4}
        hasError
        onChange={(value) => setDigitInputValue(value)}
        value={digitInputValue}
      />
    </div>
  );
}

export const code = `'use client';

import * as React from 'react';

import * as DigitInput from '@/components/ui/digit-input';

export function DigitInputHasError() {
  const [digitInputValue, setDigitInputValue] = React.useState('');

  return (
    <div className='w-full max-w-96'>
      <DigitInput.Root
        numInputs={4}
        hasError
        onChange={(value) => setDigitInputValue(value)}
        value={digitInputValue}
      />
    </div>
  );
}`;
