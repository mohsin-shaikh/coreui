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
import AvatarGroupDemo, {
  code as avatarGroupDemoCode,
} from './avatar-group/avatar-group-demo';
import AvatarGroupSize, {
  code as avatarGroupSizeCode,
} from './avatar-group/avatar-group-size';
import AvatarGroupCompactDemo, {
  code as avatarGroupCompactDemoCode,
} from './avatar-group-compact/avatar-group-compact-demo';
import AvatarGroupCompactStroke, {
  code as avatarGroupCompactStrokeCode,
} from './avatar-group-compact/avatar-group-compact-stroke';
import AvatarGroupCompactSize, {
  code as avatarGroupCompactSizeCode,
} from './avatar-group-compact/avatar-group-compact-size';
import AvatarDemo, { code as avatarDemoCode } from './avatar/avatar-demo';
import AvatarColor, { code as avatarColorCode } from './avatar/avatar-color';
import AvatarSize, { code as avatarSizeCode } from './avatar/avatar-size';
import AvatarTextContent, {
  code as avatarTextContentCode,
} from './avatar/avatar-text-content';
import AvatarPlaceholder, {
  code as avatarPlaceholderCode,
} from './avatar/avatar-placeholder';
import AvatarStatus, { code as avatarStatusCode } from './avatar/avatar-status';
import AvatarNotification, {
  code as avatarNotificationCode,
} from './avatar/avatar-notification';
import AvatarBrandLogo, {
  code as avatarBrandLogoCode,
} from './avatar/avatar-brand-logo';
import AvatarIndicatorCustomSvg, {
  code as avatarIndicatorCustomSvgCode,
} from './avatar/avatar-indicator-custom-svg';
import AvatarAsLink, { code as avatarAsLinkCode } from './avatar/avatar-as-link';
import AvatarAsNextImage, {
  code as avatarAsNextImageCode,
} from './avatar/avatar-as-next-image';
import AvatarComposition, {
  code as avatarCompositionCode,
} from './avatar/avatar-composition';
import BadgeDemo, { code as badgeDemoCode } from './badge/badge-demo';
import BadgeFilled, { code as badgeFilledCode } from './badge/badge-filled';
import BadgeLight, { code as badgeLightCode } from './badge/badge-light';
import BadgeLighter, { code as badgeLighterCode } from './badge/badge-lighter';
import BadgeStroke, { code as badgeStrokeCode } from './badge/badge-stroke';
import BadgeColors, { code as badgeColorsCode } from './badge/badge-colors';
import BadgeSize, { code as badgeSizeCode } from './badge/badge-size';
import BadgeSquare, { code as badgeSquareCode } from './badge/badge-square';
import BadgeWithIcon, {
  code as badgeWithIconCode,
} from './badge/badge-with-icon';
import BadgeWithDot, { code as badgeWithDotCode } from './badge/badge-with-dot';
import BadgeDisabled, {
  code as badgeDisabledCode,
} from './badge/badge-disabled';
import BadgeAsChild, { code as badgeAsChildCode } from './badge/badge-as-child';
import BannerDemo, { code as bannerDemoCode } from './banner/banner-demo';
import BannerError, { code as bannerErrorCode } from './banner/banner-error';
import BannerWarning, {
  code as bannerWarningCode,
} from './banner/banner-warning';
import BannerSuccess, {
  code as bannerSuccessCode,
} from './banner/banner-success';
import BannerInformation, {
  code as bannerInformationCode,
} from './banner/banner-information';
import BannerFeature, {
  code as bannerFeatureCode,
} from './banner/banner-feature';

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
  'avatar-group-demo': {
    component: AvatarGroupDemo,
    code: avatarGroupDemoCode,
  },
  'avatar-group-size': {
    component: AvatarGroupSize,
    code: avatarGroupSizeCode,
  },
  'avatar-group-compact-demo': {
    component: AvatarGroupCompactDemo,
    code: avatarGroupCompactDemoCode,
  },
  'avatar-group-compact-stroke': {
    component: AvatarGroupCompactStroke,
    code: avatarGroupCompactStrokeCode,
  },
  'avatar-group-compact-size': {
    component: AvatarGroupCompactSize,
    code: avatarGroupCompactSizeCode,
  },
  'avatar-demo': {
    component: AvatarDemo,
    code: avatarDemoCode,
  },
  'avatar-color': {
    component: AvatarColor,
    code: avatarColorCode,
  },
  'avatar-size': {
    component: AvatarSize,
    code: avatarSizeCode,
  },
  'avatar-text-content': {
    component: AvatarTextContent,
    code: avatarTextContentCode,
  },
  'avatar-placeholder': {
    component: AvatarPlaceholder,
    code: avatarPlaceholderCode,
  },
  'avatar-status': {
    component: AvatarStatus,
    code: avatarStatusCode,
  },
  'avatar-notification': {
    component: AvatarNotification,
    code: avatarNotificationCode,
  },
  'avatar-brand-logo': {
    component: AvatarBrandLogo,
    code: avatarBrandLogoCode,
  },
  'avatar-indicator-custom-svg': {
    component: AvatarIndicatorCustomSvg,
    code: avatarIndicatorCustomSvgCode,
  },
  'avatar-as-link': {
    component: AvatarAsLink,
    code: avatarAsLinkCode,
  },
  'avatar-as-next-image': {
    component: AvatarAsNextImage,
    code: avatarAsNextImageCode,
  },
  'avatar-composition': {
    component: AvatarComposition,
    code: avatarCompositionCode,
  },
  'badge-demo': {
    component: BadgeDemo,
    code: badgeDemoCode,
  },
  'badge-filled': {
    component: BadgeFilled,
    code: badgeFilledCode,
  },
  'badge-light': {
    component: BadgeLight,
    code: badgeLightCode,
  },
  'badge-lighter': {
    component: BadgeLighter,
    code: badgeLighterCode,
  },
  'badge-stroke': {
    component: BadgeStroke,
    code: badgeStrokeCode,
  },
  'badge-colors': {
    component: BadgeColors,
    code: badgeColorsCode,
  },
  'badge-size': {
    component: BadgeSize,
    code: badgeSizeCode,
  },
  'badge-square': {
    component: BadgeSquare,
    code: badgeSquareCode,
  },
  'badge-with-icon': {
    component: BadgeWithIcon,
    code: badgeWithIconCode,
  },
  'badge-with-dot': {
    component: BadgeWithDot,
    code: badgeWithDotCode,
  },
  'badge-disabled': {
    component: BadgeDisabled,
    code: badgeDisabledCode,
  },
  'badge-as-child': {
    component: BadgeAsChild,
    code: badgeAsChildCode,
  },
  'banner-demo': {
    component: BannerDemo,
    code: bannerDemoCode,
  },
  'banner-error': {
    component: BannerError,
    code: bannerErrorCode,
  },
  'banner-warning': {
    component: BannerWarning,
    code: bannerWarningCode,
  },
  'banner-success': {
    component: BannerSuccess,
    code: bannerSuccessCode,
  },
  'banner-information': {
    component: BannerInformation,
    code: bannerInformationCode,
  },
  'banner-feature': {
    component: BannerFeature,
    code: bannerFeatureCode,
  },
};
