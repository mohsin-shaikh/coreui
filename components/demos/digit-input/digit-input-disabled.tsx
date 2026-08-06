'use client';

import * as React from 'react';

import * as DigitInput from '@/components/ui/digit-input';

export default function DigitInputDisabled() {
  const [digitInputValue, setDigitInputValue] = React.useState('');

  return (
    <div className="w-full max-w-96">
      <DigitInput.Root
        numInputs={4}
        disabled
        onChange={(value) => setDigitInputValue(value)}
        value={digitInputValue}
      />
    </div>
  );
}

export const code = `'use client';

import * as React from 'react';

import * as DigitInput from '@/components/ui/digit-input';

export function DigitInputDisabled() {
  const [digitInputValue, setDigitInputValue] = React.useState('');

  return (
    <div className='w-full max-w-96'>
      <DigitInput.Root
        numInputs={4}
        disabled
        onChange={(value) => setDigitInputValue(value)}
        value={digitInputValue}
      />
    </div>
  );
}`;
