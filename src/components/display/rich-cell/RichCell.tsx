import React from "react";
import clsx from "clsx";
// import "./rich-cell.css";


export function RichCell(props: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bottom?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const { title, subtitle, bottom, before, after, href, onClick, className } = props;
  const clickable = Boolean(href || onClick);
  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      className={clsx("ui-richcell", className)}
      data-clickable={clickable ? "true" : "false"}
      href={href}
      onClick={onClick}
    >
      {before ? <div className="ui-richcell__before" aria-hidden>{before}</div> : null}
      <div className="ui-richcell__body">
        <div>
          <div className="ui-richcell__title">{title}</div>
          {subtitle ? <div className="ui-richcell__subtitle">{subtitle}</div> : null}
        </div>
        {bottom ? <div className="ui-richcell__bottom">{bottom}</div> : null}
      </div>
      {after ? <div className="ui-richcell__after">{after}</div> : null}
    </Comp>
  );
}
