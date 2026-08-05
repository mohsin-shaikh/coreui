import * as React from 'react';

import { cn } from '@/lib/cn';

export type SVGIconProps = {
  size?: number;
  stroke?: string;
  fill?: string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  children?: React.ReactNode;
  viewBox?: string;
  title?: string;
};

const SVGIcon: React.FC<SVGIconProps> = ({
  size = 20,
  stroke = 'currentColor',
  fill = 'currentColor',
  color,
  strokeWidth = 0.25,
  className,
  children,
  viewBox,
  title,
}) => {
  const intrinsicContentDimension = 20;
  const defaultViewBox = `0 0 ${intrinsicContentDimension} ${intrinsicContentDimension}`;
  const hasTitle = Boolean(title?.trim());

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox || defaultViewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={color ? { color } : undefined}
      xmlns="http://www.w3.org/2000/svg"
      role={hasTitle ? 'img' : undefined}
      aria-label={hasTitle ? title : undefined}
      aria-hidden={hasTitle ? undefined : true}
    >
      {hasTitle ? <title>{title}</title> : null}
      {children}
    </svg>
  );
};

const docsIconClassName = 'size-5 shrink-0 transition ease-linear';

export const Icons = {
  Color: (props: SVGIconProps) => (
    <SVGIcon
      fill="none"
      strokeWidth={1.25}
      {...props}
      className={cn(docsIconClassName, props.className)}
    >
      <path d="M6.085 8.324a4.3 4.3 0 0 1-.368-1.743 4.286 4.286 0 0 1 4.282-4.29 4.286 4.286 0 0 1 4.283 4.29c0 .62-.132 1.21-.369 1.743m-7.828 0a4.287 4.287 0 0 0-3.794 4.262 4.286 4.286 0 0 0 4.282 4.289 4.28 4.28 0 0 0 3.426-1.715M6.085 8.324a4.29 4.29 0 0 0 3.426 2.519m4.402-2.519A4.27 4.27 0 0 0 10 10.012m3.914-1.688a4.287 4.287 0 0 1 3.795 4.262 4.286 4.286 0 0 1-4.283 4.289c-1.4 0-2.644-.674-3.426-1.715m0 0a4.27 4.27 0 0 0 .857-2.574c0-.62-.132-1.21-.369-1.743m-.976 0q.199-.446.488-.831m-.488.83a4.3 4.3 0 0 0 .976 0m-.488-.83q.29.385.488.83" />
    </SVGIcon>
  ),

  Text: (props: SVGIconProps) => (
    <SVGIcon
      fill="none"
      strokeWidth={1.25}
      {...props}
      className={cn(docsIconClassName, props.className)}
    >
      <path d="M5.773 16.875v-7.71m12.77-5.207H8.125m2.083 5.209h-8.75m11.875-5v12.708" />
    </SVGIcon>
  ),

  Wrench: (props: SVGIconProps) => (
    <SVGIcon
      fill="none"
      strokeWidth={1.25}
      {...props}
      className={cn(docsIconClassName, props.className)}
    >
      <path d="M12.14 13.426a5.567 5.567 0 0 0 5.26-7.4l-2.262 2.261a2.422 2.422 0 1 1-3.425-3.426l2.26-2.26A5.567 5.567 0 0 0 7 10l-4.173 4.237c-.643.652-.639 1.7.009 2.348l.577.578a1.667 1.667 0 0 0 2.348.008L9.998 13a5.6 5.6 0 0 0 2.143.427Z" />
    </SVGIcon>
  ),

  Zap: (props: SVGIconProps) => (
    <SVGIcon
      fill="none"
      strokeWidth={1.25}
      {...props}
      className={cn(docsIconClassName, props.className)}
    >
      <path d="M16.498 7.292h-5.04a.417.417 0 0 1-.417-.417V1.963a.417.417 0 0 0-.76-.236L3.158 12.055a.417.417 0 0 0 .343.653h5.04c.23 0 .417.187.417.417v4.912c0 .409.527.573.76.236L16.84 7.945a.417.417 0 0 0-.343-.653Z" />
    </SVGIcon>
  ),

  Copy: (props: SVGIconProps) => (
    <SVGIcon
      fill="none"
      strokeWidth={1.25}
      {...props}
      className={cn('shrink-0 transition ease-linear', props.className)}
    >
      <path d="M7.892 7.892V4.81a.81.81 0 0 1 .81-.81h6.487a.81.81 0 0 1 .811.81v6.487a.81.81 0 0 1-.81.811h-3.082m-.81-4.216H4.81a.81.81 0 0 0-.811.81v6.487a.81.81 0 0 0 .81.811h6.487a.81.81 0 0 0 .811-.81V8.702a.81.81 0 0 0-.81-.811Z" />
    </SVGIcon>
  ),
};
