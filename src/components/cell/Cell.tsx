import React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "../icons";
// import "./cell.css";

export type CellBadge = number | "dot" | null;

export type CellProps = React.PropsWithChildren<{
  className?: string;
  /** left side icon/avatar */
  before?: React.ReactNode;
  /** right side content (e.g., value, switch, button) */
  after?: React.ReactNode;
  /** subtitle / description */
  subtitle?: React.ReactNode;
  /** badge near title */
  badge?: CellBadge;
  /** show chevron on right */
  chevron?: boolean;
  /** allow title/subtitle to wrap */
  multiline?: boolean;
  /** render as child (Link/NavLink) */
  asChild?: boolean;
  /** click handler (when not using asChild) */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** disabled state */
  disabled?: boolean;
  /** make it look clickable (hover/active) */
  clickable?: boolean;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onClick">;

function renderBadge(badge: CellBadge) {
  if (badge === null || badge === undefined) return null;
  if (badge === "dot") return <span className="ui-cell__badge" aria-label="badge">•</span>;
  if (typeof badge === "number") return <span className="ui-cell__badge">{badge > 99 ? "99+" : badge}</span>;
  return null;
}

export function Cell({
  className,
  before,
  after,
  subtitle,
  badge,
  chevron = false,
  multiline = false,
  asChild = false,
  onClick,
  disabled,
  clickable,
  children,
  ...rest
}: CellProps) {
  const Comp: any = asChild ? Slot : "div";
  const isClickable = Boolean(clickable ?? onClick ?? asChild);

    return (
    <Comp
      className={clsx("ui-cell", className)}
      data-clickable={isClickable ? "true" : "false"}
      data-multiline={multiline ? "true" : "false"}
      aria-disabled={disabled ? "true" : "false"}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {before ? <div className="ui-cell__before">{before}</div> : <div className="ui-cell__before" />}

      <div className="ui-cell__main">
        <div className="ui-cell__titleRow">
          <div className="ui-cell__title">{children}</div>
            {/*@ts-ignore*/}
          {renderBadge(badge)}
        </div>
        {subtitle ? <div className="ui-cell__subtitle">{subtitle}</div> : null}
      </div>

      <div className="ui-cell__after">
        {after}
        {chevron ? <ChevronRight className="ui-cell__chevron" /> : null}
      </div>
    </Comp>
  );
}

/** Alias, closer to VKUI naming */
export const SimpleCell = Cell;
