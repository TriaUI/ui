import React from "react";
import clsx from "clsx";
// import "./list.css";


export type ListVariant = "panel" | "plain";

export type ListProps = React.PropsWithChildren<{
  className?: string;
  /** panel (default) renders like VKUI Group panel; plain is transparent wrapper */
  variant?: ListVariant;
  /** insert dividers between items */
  dividers?: boolean;
  /** make dividers inset (starts after 'before' area) */
  insetDividers?: boolean;
}>;

function isRenderable(node: any): boolean {
  if (node === null || node === undefined || node === false) return false;
  return true;
}

export function List({
  children,
  className,
  variant = "panel",
  dividers = true,
  insetDividers = true,
}: ListProps) {
  const arr = React.Children.toArray(children).filter(isRenderable);

  return (
    <div className={clsx("ui-list", className)} data-variant={variant}>
      {arr.map((child, idx) => (
        <React.Fragment key={idx}>
          {child}
          {dividers && idx < arr.length - 1 ? (
            <div className="ui-list__divider" data-inset={insetDividers ? "true" : "false"} />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
