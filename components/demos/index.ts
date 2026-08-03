import type { ComponentType } from 'react';

import ButtonDemo, { code as buttonDemoCode } from './button/button-demo';
import ButtonPrimary, {
  code as buttonPrimaryCode,
} from './button/button-primary';
import ButtonNeutral, {
  code as buttonNeutralCode,
} from './button/button-neutral';
import ButtonError, { code as buttonErrorCode } from './button/button-error';
import ButtonSize, { code as buttonSizeCode } from './button/button-size';
import ButtonDisabled, {
  code as buttonDisabledCode,
} from './button/button-disabled';
import ButtonWithIcon, {
  code as buttonWithIconCode,
} from './button/button-with-icon';
import ButtonFullWidth, {
  code as buttonFullWidthCode,
} from './button/button-full-width';
import ButtonAsChild, {
  code as buttonAsChildCode,
} from './button/button-as-child';
import ButtonComposition, {
  code as buttonCompositionCode,
} from './button/button-composition';

export const Index: Record<
  string,
  {
    component: ComponentType;
    code: string;
  }
> = {
  'button-demo': {
    component: ButtonDemo,
    code: buttonDemoCode,
  },
  'button-primary': {
    component: ButtonPrimary,
    code: buttonPrimaryCode,
  },
  'button-neutral': {
    component: ButtonNeutral,
    code: buttonNeutralCode,
  },
  'button-error': {
    component: ButtonError,
    code: buttonErrorCode,
  },
  'button-size': {
    component: ButtonSize,
    code: buttonSizeCode,
  },
  'button-disabled': {
    component: ButtonDisabled,
    code: buttonDisabledCode,
  },
  'button-with-icon': {
    component: ButtonWithIcon,
    code: buttonWithIconCode,
  },
  'button-full-width': {
    component: ButtonFullWidth,
    code: buttonFullWidthCode,
  },
  'button-as-child': {
    component: ButtonAsChild,
    code: buttonAsChildCode,
  },
  'button-composition': {
    component: ButtonComposition,
    code: buttonCompositionCode,
  },
};
