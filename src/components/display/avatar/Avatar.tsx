import React from "react";
import clsx from "clsx";
// import "./avatar.css";


export type AvatarSize = 20 | 24 | 32 | 40 | 48;

export type AvatarProps = {
  size?: AvatarSize;
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export function Avatar({
  size = 32,
  src,
  alt,
  initials,
  className,
  ...rest
}: AvatarProps) {
  return (
    <span className={clsx("ui-avatar", className)} data-size={String(size)} {...rest}>
      {src ? <img src={src} alt={alt ?? ""} loading="lazy" /> : (initials ?? "?")}
    </span>
  );
}
