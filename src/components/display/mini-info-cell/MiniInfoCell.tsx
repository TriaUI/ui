import React from "react";
import clsx from "clsx";
// import "./mini-info-cell.css";


export function MiniInfoCell(props: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const { title, subtitle, before, after, href, onClick, className } = props;
  const clickable = Boolean(href || onClick);
  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      className={clsx("ui-minicell", className)}
      data-clickable={clickable ? "true" : "false"}
      href={href}
      onClick={onClick}
    >
      {before ? <div className="ui-minicell__before" aria-hidden>{before}</div> : null}
      <div className="ui-minicell__body">
        <div className="ui-minicell__title">{title}</div>
        {subtitle ? <div className="ui-minicell__subtitle">{subtitle}</div> : null}
      </div>
      {after ? <div className="ui-minicell__after">{after}</div> : null}
    </Comp>
  );
}
