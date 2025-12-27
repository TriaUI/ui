import React from "react";
import clsx from "clsx";
// import "./badge.css";


export type BadgeTone = "neutral" | "primary" | "danger";
export type BadgeVariant = "solid" | "soft" | "outline";
export type BadgeSize = "sm" | "md";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
};

export function Badge({
  tone = "neutral",
  variant = "soft",
  size = "md",
  dot,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={clsx("ui-badge", className)}
      data-tone={tone}
      data-variant={variant}
      data-size={size}
      {...rest}
    >
      {dot ? <span className="ui-badge__dot" aria-hidden /> : null}
      {children}
    </span>
  );
}
