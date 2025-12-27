import React from "react";
import clsx from "clsx";
// import "./placeholder.css";


export function Placeholder(props: {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  const { title, description, icon, actions, className } = props;
  return (
    <div className={clsx("ui-placeholder", className)}>
      {icon ? <div className="ui-placeholder__icon" aria-hidden>{icon}</div> : null}
      <h3 className="ui-placeholder__title">{title}</h3>
      {description ? <p className="ui-placeholder__desc">{description}</p> : null}
      {actions ? <div className="ui-placeholder__actions">{actions}</div> : null}
    </div>
  );
}
