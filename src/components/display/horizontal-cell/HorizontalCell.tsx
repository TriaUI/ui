import React from "react";
import clsx from "clsx";
import { ImageBase } from "../image-base/ImageBase";
// import "./horizontal-cell.css";


export function HorizontalCell(props: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: { src: string; alt?: string; ratio?: number };
  width?: number;
  clickable?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const { title, subtitle, image, width = 160, clickable, href, onClick, className } = props;
  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      className={clsx("ui-hcell", className)}
      data-clickable={clickable ? "true" : "false"}
      href={href}
      onClick={onClick}
      style={{ ["--ui-hcell-w" as any]: `${width}px` } as React.CSSProperties}
    >
      {image ? (
        <div className="ui-hcell__media">
          <ImageBase src={image.src} alt={image.alt} ratio={image.ratio ?? 1} />
        </div>
      ) : null}

      <div className="ui-hcell__body">
        <div className="ui-hcell__title">{title}</div>
        {subtitle ? <div className="ui-hcell__subtitle">{subtitle}</div> : null}
      </div>
    </Comp>
  );
}
