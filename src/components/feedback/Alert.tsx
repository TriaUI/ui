import React from "react";
// import "./alert.css";


export type AlertVariant = "neutral" | "success" | "warning" | "danger";

export function Alert(props: { variant?: AlertVariant; title: string; description?: string; right?: React.ReactNode }) {
  const { variant = "neutral", title, description, right } = props;
  return (
    <div className="ui-alert" data-variant={variant}>
      <div style={{ display: "flex", gap: 12, justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div className="ui-alert__title">{title}</div>
          {description ? <div className="ui-alert__desc">{description}</div> : null}
        </div>
        {right ? <div>{right}</div> : null}
      </div>
    </div>
  );
}
