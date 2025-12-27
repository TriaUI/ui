import React from "react";
import clsx from "clsx";
import { Badge, type BadgeProps } from "../badge/Badge";
// import "./content-badge.css";


export type ContentBadgePosition = "tl" | "tr" | "bl" | "br";

export function ContentBadge(props: BadgeProps & { position?: ContentBadgePosition; className?: string }) {
  const { position = "tl", className, ...rest } = props;
  return (
    <div className={clsx("ui-contentbadge", className)} data-pos={position}>
      <Badge {...rest} />
    </div>
  );
}
