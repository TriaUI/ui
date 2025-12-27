import React from "react";
import clsx from "clsx";
// import "../_shared/control.css";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
};

export function Textarea(props: TextareaProps) {
  const { label, hint, error, className, rows = 4, ...rest } = props;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}
      <textarea
        className={clsx("ui-control", className)}
        rows={rows}
        style={{ height: "auto", paddingTop: 10, paddingBottom: 10, resize: "vertical" }}
        {...rest}
      />
      {error ? <div className="ui-control__error">{error}</div> : hint ? <div className="ui-control__hint">{hint}</div> : null}
    </div>
  );
}
