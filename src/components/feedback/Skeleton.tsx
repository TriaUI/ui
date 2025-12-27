import React from "react";
import clsx from "clsx";
// import "./skeleton.css";


export function Skeleton(props: { width?: number | string; height?: number | string; className?: string; style?: React.CSSProperties }) {
  const style: React.CSSProperties = {
    width: props.width ?? "100%",
    height: props.height ?? 14,
    ...props.style
  };
  return <div className={clsx("ui-skeleton", props.className)} style={style} aria-hidden />;
}
