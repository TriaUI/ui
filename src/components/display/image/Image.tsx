import React from "react";
import { ImageBase, type ImageFit } from "../image-base/ImageBase";

export function Image(props: {
  src: string;
  alt?: string;
  ratio?: number;
  fit?: ImageFit;
  overlay?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return <ImageBase {...props} />;
}
