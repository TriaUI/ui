import React from "react";
import clsx from "clsx";
import { ImageBase } from "../image-base/ImageBase";
// import "./content-card.css";


export function ContentCard(props: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  meta?: React.ReactNode;
  media?: { src: string; alt?: string; ratio?: number; overlay?: React.ReactNode };
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const { title, subtitle, meta, media, href, onClick, className } = props;
  const clickable = Boolean(href || onClick);
  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      className={clsx("ui-contentcard", className)}
      data-clickable={clickable ? "true" : "false"}
      href={href}
      onClick={onClick}
    >
      {media ? (
        <div className="ui-contentcard__media">
          <ImageBase src={media.src} alt={media.alt} ratio={media.ratio ?? (16 / 9)} overlay={media.overlay} />
        </div>
      ) : null}

      <div className="ui-contentcard__body">
        <div className="ui-contentcard__title">{title}</div>
        {subtitle ? <div className="ui-contentcard__subtitle">{subtitle}</div> : null}
        {meta ? <div className="ui-contentcard__meta">{meta}</div> : null}
      </div>
    </Comp>
  );
}
