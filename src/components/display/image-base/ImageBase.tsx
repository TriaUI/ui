import React from "react";
import clsx from "clsx";
// import "./image-base.css";


export type ImageFit = "cover" | "contain";

export function ImageBase(props: {
  src: string;
  alt?: string;
  ratio?: number; // width/height, e.g. 16/9
  fit?: ImageFit;
  overlay?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { src, alt, ratio = 16 / 9, fit = "cover", overlay, className, style } = props;
  const paddingBottom = `${(1 / ratio) * 100}%`;

  return (
    <div
      className={clsx("ui-imagebase", className)}
      style={
        {
          ...style,
          ["--ui-image-ratio" as any]: paddingBottom,
          ["--ui-image-fit" as any]: fit,
        } as React.CSSProperties
      }
    >
      <div className="ui-imagebase__ratio" />
      <img src={src} alt={alt ?? ""} loading="lazy" />
      {overlay ? <div className="ui-imagebase__overlay">{overlay}</div> : null}
    </div>
  );
}
