import React from "react";
import clsx from "clsx";
// import "./banner.css";


export type BannerTone = "neutral" | "primary" | "danger";

export function Banner(props: {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  tone?: BannerTone;
  className?: string;
}) {
  const { title, description, icon, actions, tone = "primary", className } = props;
  return (
    <div className={clsx("ui-banner", className)} data-tone={tone}>
      {icon ? <div className="ui-banner__icon" aria-hidden>{icon}</div> : null}
      <div className="ui-banner__body">
        <h4 className="ui-banner__title">{title}</h4>
        {description ? <p className="ui-banner__desc">{description}</p> : null}
        {actions ? <div className="ui-banner__actions">{actions}</div> : null}
      </div>
    </div>
  );
}
