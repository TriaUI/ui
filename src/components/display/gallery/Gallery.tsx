import React from "react";
import clsx from "clsx";
import { ImageBase } from "../image-base/ImageBase";
// import "./gallery.css";


export type GalleryItem = {
  id: string;
  src: string;
  alt?: string;
};

export function Gallery(props: {
  items: GalleryItem[];
  cols?: 2 | 3 | 4;
  ratio?: number;
  onItemClick?: (id: string) => void;
  className?: string;
}) {
  const { items, cols = 3, ratio = 1, onItemClick, className } = props;

  return (
    <div className={clsx("ui-gallery", className)} data-cols={String(cols)}>
      {items.map((it) => (
        <div key={it.id} onClick={() => onItemClick?.(it.id)} style={{ cursor: onItemClick ? "pointer" : "default" }}>
          <ImageBase src={it.src} alt={it.alt} ratio={ratio} />
        </div>
      ))}
    </div>
  );
}
