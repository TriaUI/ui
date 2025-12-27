import React from "react";
import clsx from "clsx";
// import "./counter.css";


export type CounterTone = "danger" | "primary" | "neutral";
export type CounterVariant = "solid" | "soft" | "outline";
export type CounterSize = "sm" | "md";

export type CounterProps = React.HTMLAttributes<HTMLSpanElement> & {
  value: number;
  max?: number; // e.g. 99 -> "99+"
  tone?: CounterTone;
  variant?: CounterVariant;
  size?: CounterSize;
};

export function Counter({
  value,
  max = 99,
  tone = "danger",
  variant = "solid",
  size = "md",
  className,
  ...rest
}: CounterProps) {
  const text = value > max ? `${max}+` : String(value);
  return (
    <span
      className={clsx("ui-counter", className)}
      data-tone={tone}
      data-variant={variant}
      data-size={size}
      {...rest}
    >
      {text}
    </span>
  );
}
