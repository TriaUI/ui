import React from "react";
import clsx from "clsx";
// import "./horizontal-scroll.css";


export function HorizontalScroll(props: React.PropsWithChildren<{ gap?: number; className?: string }>) {
  const { gap = 12, className, children } = props;
  return (
    <div className={clsx("ui-hscroll", className)} style={{ ["--ui-hscroll-gap" as any]: `${gap}px` } as React.CSSProperties}>
      <div className="ui-hscroll__inner">{children}</div>
    </div>
  );
}
