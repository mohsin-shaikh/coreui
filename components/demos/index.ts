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
import DataTableRowSelection, {
  code as dataTableRowSelectionCode,
} from './data-table/data-table-row-selection';
import DividerDemo, { code as dividerDemoCode } from './divider/divider-demo';
import DividerLine, { code as dividerLineCode } from './divider/divider-line';
import DividerLineSpacing, {
  code as dividerLineSpacingCode,
} from './divider/divider-line-spacing';
import DividerLineText, {
  code as dividerLineTextCode,
} from './divider/divider-line-text';
import DividerText, { code as dividerTextCode } from './divider/divider-text';
import DividerSolidText, {
  code as dividerSolidTextCode,
} from './divider/divider-solid-text';
import DividerContent, {
  code as dividerContentCode,
} from './divider/divider-content';
import KbdDemo, { code as kbdDemoCode } from './kbd/kbd-demo';
import ProgressBarDemo, {
  code as progressBarDemoCode,
} from './progress-bar/progress-bar-demo';
import ProgressBarColor, {
  code as progressBarColorCode,
} from './progress-bar/progress-bar-color';
import ProgressBarWithLabel, {
  code as progressBarWithLabelCode,
} from './progress-bar/progress-bar-with-label';
import ProgressBarAdvanced, {
  code as progressBarAdvancedCode,
} from './progress-bar/progress-bar-advanced';
import ProgressCircleDemo, {
  code as progressCircleDemoCode,
} from './progress-circle/progress-circle-demo';
import ProgressCircleSize, {
  code as progressCircleSizeCode,
} from './progress-circle/progress-circle-size';
import RatingReview, { code as ratingReviewCode } from './rating/rating-review';
import RatingReviewWithLabel, {
  code as ratingReviewWithLabelCode,
} from './rating/rating-review-with-label';
import RatingCell, { code as ratingCellCode } from './rating/rating-cell';
import RatingBarStar, {
  code as ratingBarStarCode,
} from './rating/rating-bar-star';
import RatingBarHeart, {
  code as ratingBarHeartCode,
} from './rating/rating-bar-heart';
import RatingBarSingleSelectable, {
  code as ratingBarSingleSelectableCode,
} from './rating/rating-bar-single-selectable';
import RatingBarWithTextarea, {
  code as ratingBarWithTextareaCode,
} from './rating/rating-bar-with-textarea';
import StatusBadgeDemo, {
  code as statusBadgeDemoCode,
} from './status-badge/status-badge-demo';
import StatusBadgeDisabled, {
  code as statusBadgeDisabledCode,
} from './status-badge/status-badge-disabled';
import StatusBadgeCompleted, {
  code as statusBadgeCompletedCode,
} from './status-badge/status-badge-completed';
import StatusBadgeFailed, {
  code as statusBadgeFailedCode,
} from './status-badge/status-badge-failed';
import StatusBadgePending, {
  code as statusBadgePendingCode,
} from './status-badge/status-badge-pending';
import StatusBadgeAsChild, {
  code as statusBadgeAsChildCode,
} from './status-badge/status-badge-as-child';
import TagDemo, { code as tagDemoCode } from './tag/tag-demo';
import TagStroke, { code as tagStrokeCode } from './tag/tag-stroke';
import TagGray, { code as tagGrayCode } from './tag/tag-gray';
import TagDisabled, { code as tagDisabledCode } from './tag/tag-disabled';
import TagWithImage, { code as tagWithImageCode } from './tag/tag-with-image';
import TagWithAvatar, {
  code as tagWithAvatarCode,
} from './tag/tag-with-avatar';
import TagDismissable, {
  code as tagDismissableCode,
} from './tag/tag-dismissable';
import AlertDemo, { code as alertDemoCode } from './alert/alert-demo';
import AlertFilled, { code as alertFilledCode } from './alert/alert-filled';
import AlertLight, { code as alertLightCode } from './alert/alert-light';
import AlertLighter, { code as alertLighterCode } from './alert/alert-lighter';
import AlertStroke, { code as alertStrokeCode } from './alert/alert-stroke';
import AlertSizeXsmall, {
  code as alertSizeXsmallCode,
} from './alert/alert-size-xsmall';
import AlertSizeSmall, {
  code as alertSizeSmallCode,
} from './alert/alert-size-small';
import AlertSizeLarge, {
  code as alertSizeLargeCode,
} from './alert/alert-size-large';
import NotificationDemo, {
  code as notificationDemoCode,
} from './notification/notification-demo';
import NotificationVariants, {
  code as notificationVariantsCode,
} from './notification/notification-variants';
import NotificationWithAction, {
  code as notificationWithActionCode,
} from './notification/notification-with-action';
import NotificationWithLink, {
  code as notificationWithLinkCode,
} from './notification/notification-with-link';
import NotificationWithSecondaryAction, {
  code as notificationWithSecondaryActionCode,
} from './notification/notification-with-secondary-action';
import ToastDemo, { code as toastDemoCode } from './toast/toast-demo';
import ToastNonDismissable, {
  code as toastNonDismissableCode,
} from './toast/toast-non-dismissable';
import ToastSonnerOptions, {
  code as toastSonnerOptionsCode,
} from './toast/toast-sonner-options';
import TooltipDemo, { code as tooltipDemoCode } from './tooltip/tooltip-demo';
import TooltipLight, { code as tooltipLightCode } from './tooltip/tooltip-light';
import TooltipSize, { code as tooltipSizeCode } from './tooltip/tooltip-size';
import TooltipPosition, {
  code as tooltipPositionCode,
} from './tooltip/tooltip-position';
import TooltipHtmlContent, {
  code as tooltipHtmlContentCode,
} from './tooltip/tooltip-html-content';
import CheckboxDemo, { code as checkboxDemoCode } from './checkbox/checkbox-demo';
import CheckboxDisabled, {
  code as checkboxDisabledCode,
} from './checkbox/checkbox-disabled';
import CheckboxWithLabel, {
  code as checkboxWithLabelCode,
} from './checkbox/checkbox-with-label';
import CheckboxWithAdvancedLabel, {
  code as checkboxWithAdvancedLabelCode,
} from './checkbox/checkbox-with-advanced-label';
import ColorPickerDemo, {
  code as colorPickerDemoCode,
} from './color-picker/color-picker-demo';
import ColorPickerWithPopover, {
  code as colorPickerWithPopoverCode,
} from './color-picker/color-picker-with-popover';
import DatepickerDemo, {
  code as datepickerDemoCode,
} from './datepicker/datepicker-demo';
import DatepickerPopover, {
  code as datepickerPopoverCode,
} from './datepicker/datepicker-popover';
import DatepickerApproval, {
  code as datepickerApprovalCode,
} from './datepicker/datepicker-approval';
import DatepickerRange, {
  code as datepickerRangeCode,
} from './datepicker/datepicker-range';
import DigitInputDemo, {
  code as digitInputDemoCode,
} from './digit-input/digit-input-demo';
import DigitInputHasError, {
  code as digitInputHasErrorCode,
} from './digit-input/digit-input-has-error';
import DigitInputDisabled, {
  code as digitInputDisabledCode,
} from './digit-input/digit-input-disabled';
import DigitInputSquare, {
  code as digitInputSquareCode,
} from './digit-input/digit-input-square';
import FileUploadDemo, {
  code as fileUploadDemoCode,
} from './file-upload/file-upload-demo';
import FileFormatIconDemo, {
  code as fileFormatIconDemoCode,
} from './file-upload/file-format-icon-demo';
import HintDemo, { code as hintDemoCode } from './hint/hint-demo';
import HintDisabled, { code as hintDisabledCode } from './hint/hint-disabled';
import HintHasError, { code as hintHasErrorCode } from './hint/hint-has-error';
import InputDemo, { code as inputDemoCode } from './input/input-demo';
import InputIcon, { code as inputIconCode } from './input/input-icon';
import InputSize, { code as inputSizeCode } from './input/input-size';
import InputAffix, { code as inputAffixCode } from './input/input-affix';
import InputInlineAffix, {
  code as inputInlineAffixCode,
} from './input/input-inline-affix';
import InputWithLabelAndHint, {
  code as inputWithLabelAndHintCode,
} from './input/input-with-label-and-hint';
import InputWithKbd, { code as inputWithKbdCode } from './input/input-with-kbd';
import InputPassword, { code as inputPasswordCode } from './input/input-password';
import InputPasswordWithLevels, {
  code as inputPasswordWithLevelsCode,
} from './input/input-password-with-levels';
import InputDisabled, { code as inputDisabledCode } from './input/input-disabled';
import InputHasError, { code as inputHasErrorCode } from './input/input-has-error';
import InputWithButton, {
  code as inputWithButtonCode,
} from './input/input-with-button';
import InputPayment, { code as inputPaymentCode } from './input/input-payment';
import InputWithSelect, {
  code as inputWithSelectCode,
} from './input/input-with-select';
import InputWithInlineSelect, {
  code as inputWithInlineSelectCode,
} from './input/input-with-inline-select';
import InputWithTags, { code as inputWithTagsCode } from './input/input-with-tags';
import InputDateReactAria, {
  code as inputDateReactAriaCode,
} from './input/input-date-react-aria';
import InputCounterReactAria, {
  code as inputCounterReactAriaCode,
} from './input/input-counter-react-aria';
import InputComposition, {
  code as inputCompositionCode,
} from './input/input-composition';
import LabelDemo, { code as labelDemoCode } from './label/label-demo';
import RadioDemo, { code as radioDemoCode } from './radio/radio-demo';
import RadioDisabled, { code as radioDisabledCode } from './radio/radio-disabled';
import RadioWithLabel, {
  code as radioWithLabelCode,
} from './radio/radio-with-label';
import RadioWithAdvancedLabel, {
  code as radioWithAdvancedLabelCode,
} from './radio/radio-with-advanced-label';
import SelectDemo, { code as selectDemoCode } from './select/select-demo';
import SelectWithLabelAndHint, {
  code as selectWithLabelAndHintCode,
} from './select/select-with-label-and-hint';
import SelectIcons, { code as selectIconsCode } from './select/select-icons';
import SelectSize, { code as selectSizeCode } from './select/select-size';
import SelectCountry, {
  code as selectCountryCode,
} from './select/select-country';
import SelectPaymentMethod, {
  code as selectPaymentMethodCode,
} from './select/select-payment-method';
import SelectUser, { code as selectUserCode } from './select/select-user';
import SelectDisabled, {
  code as selectDisabledCode,
} from './select/select-disabled';
import SelectCompactPaging, {
  code as selectCompactPagingCode,
} from './select/select-compact-paging';
import SelectCompactCountry, {
  code as selectCompactCountryCode,
} from './select/select-compact-country';
import SelectCompactSize, {
  code as selectCompactSizeCode,
} from './select/select-compact-size';
import SelectInlineCountry, {
  code as selectInlineCountryCode,
} from './select/select-inline-country';
import SelectInlineWithInput, {
  code as selectInlineWithInputCode,
} from './select/select-inline-with-input';
import SelectCompactForInputWithInput, {
  code as selectCompactForInputWithInputCode,
} from './select/select-compact-for-input-with-input';
import SelectCompactForInputSize, {
  code as selectCompactForInputSizeCode,
} from './select/select-compact-for-input-size';

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
  'data-table-row-selection': {
    component: DataTableRowSelection,
    code: dataTableRowSelectionCode,
  },
  'divider-demo': {
    component: DividerDemo,
    code: dividerDemoCode,
  },
  'divider-line': {
    component: DividerLine,
    code: dividerLineCode,
  },
  'divider-line-spacing': {
    component: DividerLineSpacing,
    code: dividerLineSpacingCode,
  },
  'divider-line-text': {
    component: DividerLineText,
    code: dividerLineTextCode,
  },
  'divider-text': {
    component: DividerText,
    code: dividerTextCode,
  },
  'divider-solid-text': {
    component: DividerSolidText,
    code: dividerSolidTextCode,
  },
  'divider-content': {
    component: DividerContent,
    code: dividerContentCode,
  },
  'kbd-demo': {
    component: KbdDemo,
    code: kbdDemoCode,
  },
  'progress-bar-demo': {
    component: ProgressBarDemo,
    code: progressBarDemoCode,
  },
  'progress-bar-color': {
    component: ProgressBarColor,
    code: progressBarColorCode,
  },
  'progress-bar-with-label': {
    component: ProgressBarWithLabel,
    code: progressBarWithLabelCode,
  },
  'progress-bar-advanced': {
    component: ProgressBarAdvanced,
    code: progressBarAdvancedCode,
  },
  'progress-circle-demo': {
    component: ProgressCircleDemo,
    code: progressCircleDemoCode,
  },
  'progress-circle-size': {
    component: ProgressCircleSize,
    code: progressCircleSizeCode,
  },
  'rating-review': {
    component: RatingReview,
    code: ratingReviewCode,
  },
  'rating-review-with-label': {
    component: RatingReviewWithLabel,
    code: ratingReviewWithLabelCode,
  },
  'rating-cell': {
    component: RatingCell,
    code: ratingCellCode,
  },
  'rating-bar-star': {
    component: RatingBarStar,
    code: ratingBarStarCode,
  },
  'rating-bar-heart': {
    component: RatingBarHeart,
    code: ratingBarHeartCode,
  },
  'rating-bar-single-selectable': {
    component: RatingBarSingleSelectable,
    code: ratingBarSingleSelectableCode,
  },
  'rating-bar-with-textarea': {
    component: RatingBarWithTextarea,
    code: ratingBarWithTextareaCode,
  },
  'status-badge-demo': {
    component: StatusBadgeDemo,
    code: statusBadgeDemoCode,
  },
  'status-badge-disabled': {
    component: StatusBadgeDisabled,
    code: statusBadgeDisabledCode,
  },
  'status-badge-completed': {
    component: StatusBadgeCompleted,
    code: statusBadgeCompletedCode,
  },
  'status-badge-failed': {
    component: StatusBadgeFailed,
    code: statusBadgeFailedCode,
  },
  'status-badge-pending': {
    component: StatusBadgePending,
    code: statusBadgePendingCode,
  },
  'status-badge-as-child': {
    component: StatusBadgeAsChild,
    code: statusBadgeAsChildCode,
  },
  'tag-demo': {
    component: TagDemo,
    code: tagDemoCode,
  },
  'tag-stroke': {
    component: TagStroke,
    code: tagStrokeCode,
  },
  'tag-gray': {
    component: TagGray,
    code: tagGrayCode,
  },
  'tag-disabled': {
    component: TagDisabled,
    code: tagDisabledCode,
  },
  'tag-with-image': {
    component: TagWithImage,
    code: tagWithImageCode,
  },
  'tag-with-avatar': {
    component: TagWithAvatar,
    code: tagWithAvatarCode,
  },
  'tag-dismissable': {
    component: TagDismissable,
    code: tagDismissableCode,
  },
  'alert-demo': {
    component: AlertDemo,
    code: alertDemoCode,
  },
  'alert-filled': {
    component: AlertFilled,
    code: alertFilledCode,
  },
  'alert-light': {
    component: AlertLight,
    code: alertLightCode,
  },
  'alert-lighter': {
    component: AlertLighter,
    code: alertLighterCode,
  },
  'alert-stroke': {
    component: AlertStroke,
    code: alertStrokeCode,
  },
  'alert-size-xsmall': {
    component: AlertSizeXsmall,
    code: alertSizeXsmallCode,
  },
  'alert-size-small': {
    component: AlertSizeSmall,
    code: alertSizeSmallCode,
  },
  'alert-size-large': {
    component: AlertSizeLarge,
    code: alertSizeLargeCode,
  },
  'notification-demo': {
    component: NotificationDemo,
    code: notificationDemoCode,
  },
  'notification-variants': {
    component: NotificationVariants,
    code: notificationVariantsCode,
  },
  'notification-with-action': {
    component: NotificationWithAction,
    code: notificationWithActionCode,
  },
  'notification-with-link': {
    component: NotificationWithLink,
    code: notificationWithLinkCode,
  },
  'notification-with-secondary-action': {
    component: NotificationWithSecondaryAction,
    code: notificationWithSecondaryActionCode,
  },
  'toast-demo': {
    component: ToastDemo,
    code: toastDemoCode,
  },
  'toast-non-dismissable': {
    component: ToastNonDismissable,
    code: toastNonDismissableCode,
  },
  'toast-sonner-options': {
    component: ToastSonnerOptions,
    code: toastSonnerOptionsCode,
  },
  'tooltip-demo': {
    component: TooltipDemo,
    code: tooltipDemoCode,
  },
  'tooltip-light': {
    component: TooltipLight,
    code: tooltipLightCode,
  },
  'tooltip-size': {
    component: TooltipSize,
    code: tooltipSizeCode,
  },
  'tooltip-position': {
    component: TooltipPosition,
    code: tooltipPositionCode,
  },
  'tooltip-html-content': {
    component: TooltipHtmlContent,
    code: tooltipHtmlContentCode,
  },
  'checkbox-demo': {
    component: CheckboxDemo,
    code: checkboxDemoCode,
  },
  'checkbox-disabled': {
    component: CheckboxDisabled,
    code: checkboxDisabledCode,
  },
  'checkbox-with-label': {
    component: CheckboxWithLabel,
    code: checkboxWithLabelCode,
  },
  'checkbox-with-advanced-label': {
    component: CheckboxWithAdvancedLabel,
    code: checkboxWithAdvancedLabelCode,
  },
  'color-picker-demo': {
    component: ColorPickerDemo,
    code: colorPickerDemoCode,
  },
  'color-picker-with-popover': {
    component: ColorPickerWithPopover,
    code: colorPickerWithPopoverCode,
  },
  'datepicker-demo': {
    component: DatepickerDemo,
    code: datepickerDemoCode,
  },
  'datepicker-popover': {
    component: DatepickerPopover,
    code: datepickerPopoverCode,
  },
  'datepicker-approval': {
    component: DatepickerApproval,
    code: datepickerApprovalCode,
  },
  'datepicker-range': {
    component: DatepickerRange,
    code: datepickerRangeCode,
  },
  'digit-input-demo': {
    component: DigitInputDemo,
    code: digitInputDemoCode,
  },
  'digit-input-has-error': {
    component: DigitInputHasError,
    code: digitInputHasErrorCode,
  },
  'digit-input-disabled': {
    component: DigitInputDisabled,
    code: digitInputDisabledCode,
  },
  'digit-input-square': {
    component: DigitInputSquare,
    code: digitInputSquareCode,
  },
  'file-upload-demo': {
    component: FileUploadDemo,
    code: fileUploadDemoCode,
  },
  'file-format-icon-demo': {
    component: FileFormatIconDemo,
    code: fileFormatIconDemoCode,
  },
  'hint-demo': {
    component: HintDemo,
    code: hintDemoCode,
  },
  'hint-disabled': {
    component: HintDisabled,
    code: hintDisabledCode,
  },
  'hint-has-error': {
    component: HintHasError,
    code: hintHasErrorCode,
  },
  'input-demo': {
    component: InputDemo,
    code: inputDemoCode,
  },
  'input-icon': {
    component: InputIcon,
    code: inputIconCode,
  },
  'input-size': {
    component: InputSize,
    code: inputSizeCode,
  },
  'input-affix': {
    component: InputAffix,
    code: inputAffixCode,
  },
  'input-inline-affix': {
    component: InputInlineAffix,
    code: inputInlineAffixCode,
  },
  'input-with-label-and-hint': {
    component: InputWithLabelAndHint,
    code: inputWithLabelAndHintCode,
  },
  'input-with-kbd': {
    component: InputWithKbd,
    code: inputWithKbdCode,
  },
  'input-password': {
    component: InputPassword,
    code: inputPasswordCode,
  },
  'input-password-with-levels': {
    component: InputPasswordWithLevels,
    code: inputPasswordWithLevelsCode,
  },
  'input-disabled': {
    component: InputDisabled,
    code: inputDisabledCode,
  },
  'input-has-error': {
    component: InputHasError,
    code: inputHasErrorCode,
  },
  'input-with-button': {
    component: InputWithButton,
    code: inputWithButtonCode,
  },
  'input-payment': {
    component: InputPayment,
    code: inputPaymentCode,
  },
  'input-with-select': {
    component: InputWithSelect,
    code: inputWithSelectCode,
  },
  'input-with-inline-select': {
    component: InputWithInlineSelect,
    code: inputWithInlineSelectCode,
  },
  'input-with-tags': {
    component: InputWithTags,
    code: inputWithTagsCode,
  },
  'input-date-react-aria': {
    component: InputDateReactAria,
    code: inputDateReactAriaCode,
  },
  'input-counter-react-aria': {
    component: InputCounterReactAria,
    code: inputCounterReactAriaCode,
  },
  'input-composition': {
    component: InputComposition,
    code: inputCompositionCode,
  },
  'label-demo': {
    component: LabelDemo,
    code: labelDemoCode,
  },
  'radio-demo': {
    component: RadioDemo,
    code: radioDemoCode,
  },
  'radio-disabled': {
    component: RadioDisabled,
    code: radioDisabledCode,
  },
  'radio-with-label': {
    component: RadioWithLabel,
    code: radioWithLabelCode,
  },
  'radio-with-advanced-label': {
    component: RadioWithAdvancedLabel,
    code: radioWithAdvancedLabelCode,
  },
  'select-demo': {
    component: SelectDemo,
    code: selectDemoCode,
  },
  'select-with-label-and-hint': {
    component: SelectWithLabelAndHint,
    code: selectWithLabelAndHintCode,
  },
  'select-icons': {
    component: SelectIcons,
    code: selectIconsCode,
  },
  'select-size': {
    component: SelectSize,
    code: selectSizeCode,
  },
  'select-country': {
    component: SelectCountry,
    code: selectCountryCode,
  },
  'select-payment-method': {
    component: SelectPaymentMethod,
    code: selectPaymentMethodCode,
  },
  'select-user': {
    component: SelectUser,
    code: selectUserCode,
  },
  'select-disabled': {
    component: SelectDisabled,
    code: selectDisabledCode,
  },
  'select-compact-paging': {
    component: SelectCompactPaging,
    code: selectCompactPagingCode,
  },
  'select-compact-country': {
    component: SelectCompactCountry,
    code: selectCompactCountryCode,
  },
  'select-compact-size': {
    component: SelectCompactSize,
    code: selectCompactSizeCode,
  },
  'select-inline-country': {
    component: SelectInlineCountry,
    code: selectInlineCountryCode,
  },
  'select-inline-with-input': {
    component: SelectInlineWithInput,
    code: selectInlineWithInputCode,
  },
  'select-compact-for-input-with-input': {
    component: SelectCompactForInputWithInput,
    code: selectCompactForInputWithInputCode,
  },
  'select-compact-for-input-size': {
    component: SelectCompactForInputSize,
    code: selectCompactForInputSizeCode,
  },
};
