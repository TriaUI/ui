import React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "../icons";
// import "./cell.css";
// import "./richcell.css";

export type RichCellProps = React.PropsWithChildren<{
  className?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
  /** main line under title */
  text?: React.ReactNode;
  /** secondary text below */
  caption?: React.ReactNode;
  /** bottom actions row (chips/buttons) */
  bottom?: React.ReactNode;
  chevron?: boolean;
  multiline?: boolean;
  asChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  clickable?: boolean;
}> & Omit<React.HTMLAttributes<HTMLElement>, "onClick">;

export function RichCell({
  className,
  before,
  after,
  text,
  caption,
  bottom,
  chevron,
  multiline = true,
  asChild,
  onClick,
  disabled,
  clickable,
  children,
  ...rest
}: RichCellProps) {
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
        </div>

        {text ? <div className="ui-cell__subtitle">{text}</div> : null}
        {caption ? <div className="ui-richcell__caption">{caption}</div> : null}
        {bottom ? <div className="ui-richcell__bottom">{bottom}</div> : null}
      </div>

      <div className="ui-cell__after">
        {after}
        {chevron ? <ChevronRight className="ui-cell__chevron" /> : null}
      </div>
    </Comp>
  );
}
