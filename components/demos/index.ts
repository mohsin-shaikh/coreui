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
import ButtonGroupDemo, {
  code as buttonGroupDemoCode,
} from './button-group/button-group-demo';
import ButtonGroupSize, {
  code as buttonGroupSizeCode,
} from './button-group/button-group-size';
import ButtonGroupToggleGroup, {
  code as buttonGroupToggleGroupCode,
} from './button-group/button-group-toggle-group';
import CompactButtonDemo, {
  code as compactButtonDemoCode,
} from './compact-button/compact-button-demo';
import CompactButtonStroke, {
  code as compactButtonStrokeCode,
} from './compact-button/compact-button-stroke';
import CompactButtonGhost, {
  code as compactButtonGhostCode,
} from './compact-button/compact-button-ghost';
import CompactButtonWhite, {
  code as compactButtonWhiteCode,
} from './compact-button/compact-button-white';
import CompactButtonModifiable, {
  code as compactButtonModifiableCode,
} from './compact-button/compact-button-modifiable';
import CompactButtonSize, {
  code as compactButtonSizeCode,
} from './compact-button/compact-button-size';
import CompactButtonFullRadius, {
  code as compactButtonFullRadiusCode,
} from './compact-button/compact-button-full-radius';
import CompactButtonDisabled, {
  code as compactButtonDisabledCode,
} from './compact-button/compact-button-disabled';
import CompactButtonAsChild, {
  code as compactButtonAsChildCode,
} from './compact-button/compact-button-as-child';
import CompactButtonComposition, {
  code as compactButtonCompositionCode,
} from './compact-button/compact-button-composition';
import FancyButtonDemo, {
  code as fancyButtonDemoCode,
} from './fancy-button/fancy-button-demo';
import FancyButtonNeutral, {
  code as fancyButtonNeutralCode,
} from './fancy-button/fancy-button-neutral';
import FancyButtonPrimary, {
  code as fancyButtonPrimaryCode,
} from './fancy-button/fancy-button-primary';
import FancyButtonDestructive, {
  code as fancyButtonDestructiveCode,
} from './fancy-button/fancy-button-destructive';
import FancyButtonBasic, {
  code as fancyButtonBasicCode,
} from './fancy-button/fancy-button-basic';
import FancyButtonWithIcon, {
  code as fancyButtonWithIconCode,
} from './fancy-button/fancy-button-with-icon';
import FancyButtonSize, {
  code as fancyButtonSizeCode,
} from './fancy-button/fancy-button-size';
import FancyButtonDisabled, {
  code as fancyButtonDisabledCode,
} from './fancy-button/fancy-button-disabled';
import FancyButtonAsChild, {
  code as fancyButtonAsChildCode,
} from './fancy-button/fancy-button-as-child';
import FancyButtonComposition, {
  code as fancyButtonCompositionCode,
} from './fancy-button/fancy-button-composition';
import LinkButtonDemo, {
  code as linkButtonDemoCode,
} from './link-button/link-button-demo';
import LinkButtonGray, {
  code as linkButtonGrayCode,
} from './link-button/link-button-gray';
import LinkButtonBlack, {
  code as linkButtonBlackCode,
} from './link-button/link-button-black';
import LinkButtonPrimary, {
  code as linkButtonPrimaryCode,
} from './link-button/link-button-primary';
import LinkButtonError, {
  code as linkButtonErrorCode,
} from './link-button/link-button-error';
import LinkButtonModifiable, {
  code as linkButtonModifiableCode,
} from './link-button/link-button-modifiable';
import LinkButtonSize, {
  code as linkButtonSizeCode,
} from './link-button/link-button-size';
import LinkButtonUnderline, {
  code as linkButtonUnderlineCode,
} from './link-button/link-button-underline';
import LinkButtonWithIcon, {
  code as linkButtonWithIconCode,
} from './link-button/link-button-with-icon';
import LinkButtonDisabled, {
  code as linkButtonDisabledCode,
} from './link-button/link-button-disabled';
import LinkButtonAsChild, {
  code as linkButtonAsChildCode,
} from './link-button/link-button-as-child';
import LinkButtonComposition, {
  code as linkButtonCompositionCode,
} from './link-button/link-button-composition';

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
  'button-group-demo': {
    component: ButtonGroupDemo,
    code: buttonGroupDemoCode,
  },
  'button-group-size': {
    component: ButtonGroupSize,
    code: buttonGroupSizeCode,
  },
  'button-group-toggle-group': {
    component: ButtonGroupToggleGroup,
    code: buttonGroupToggleGroupCode,
  },
  'compact-button-demo': {
    component: CompactButtonDemo,
    code: compactButtonDemoCode,
  },
  'compact-button-stroke': {
    component: CompactButtonStroke,
    code: compactButtonStrokeCode,
  },
  'compact-button-ghost': {
    component: CompactButtonGhost,
    code: compactButtonGhostCode,
  },
  'compact-button-white': {
    component: CompactButtonWhite,
    code: compactButtonWhiteCode,
  },
  'compact-button-modifiable': {
    component: CompactButtonModifiable,
    code: compactButtonModifiableCode,
  },
  'compact-button-size': {
    component: CompactButtonSize,
    code: compactButtonSizeCode,
  },
  'compact-button-full-radius': {
    component: CompactButtonFullRadius,
    code: compactButtonFullRadiusCode,
  },
  'compact-button-disabled': {
    component: CompactButtonDisabled,
    code: compactButtonDisabledCode,
  },
  'compact-button-as-child': {
    component: CompactButtonAsChild,
    code: compactButtonAsChildCode,
  },
  'compact-button-composition': {
    component: CompactButtonComposition,
    code: compactButtonCompositionCode,
  },
  'fancy-button-demo': {
    component: FancyButtonDemo,
    code: fancyButtonDemoCode,
  },
  'fancy-button-neutral': {
    component: FancyButtonNeutral,
    code: fancyButtonNeutralCode,
  },
  'fancy-button-primary': {
    component: FancyButtonPrimary,
    code: fancyButtonPrimaryCode,
  },
  'fancy-button-destructive': {
    component: FancyButtonDestructive,
    code: fancyButtonDestructiveCode,
  },
  'fancy-button-basic': {
    component: FancyButtonBasic,
    code: fancyButtonBasicCode,
  },
  'fancy-button-with-icon': {
    component: FancyButtonWithIcon,
    code: fancyButtonWithIconCode,
  },
  'fancy-button-size': {
    component: FancyButtonSize,
    code: fancyButtonSizeCode,
  },
  'fancy-button-disabled': {
    component: FancyButtonDisabled,
    code: fancyButtonDisabledCode,
  },
  'fancy-button-as-child': {
    component: FancyButtonAsChild,
    code: fancyButtonAsChildCode,
  },
  'fancy-button-composition': {
    component: FancyButtonComposition,
    code: fancyButtonCompositionCode,
  },
  'link-button-demo': {
    component: LinkButtonDemo,
    code: linkButtonDemoCode,
  },
  'link-button-gray': {
    component: LinkButtonGray,
    code: linkButtonGrayCode,
  },
  'link-button-black': {
    component: LinkButtonBlack,
    code: linkButtonBlackCode,
  },
  'link-button-primary': {
    component: LinkButtonPrimary,
    code: linkButtonPrimaryCode,
  },
  'link-button-error': {
    component: LinkButtonError,
    code: linkButtonErrorCode,
  },
  'link-button-modifiable': {
    component: LinkButtonModifiable,
    code: linkButtonModifiableCode,
  },
  'link-button-size': {
    component: LinkButtonSize,
    code: linkButtonSizeCode,
  },
  'link-button-underline': {
    component: LinkButtonUnderline,
    code: linkButtonUnderlineCode,
  },
  'link-button-with-icon': {
    component: LinkButtonWithIcon,
    code: linkButtonWithIconCode,
  },
  'link-button-disabled': {
    component: LinkButtonDisabled,
    code: linkButtonDisabledCode,
  },
  'link-button-as-child': {
    component: LinkButtonAsChild,
    code: linkButtonAsChildCode,
  },
  'link-button-composition': {
    component: LinkButtonComposition,
    code: linkButtonCompositionCode,
  },
};
