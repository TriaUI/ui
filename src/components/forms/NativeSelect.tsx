import React from "react";
import clsx from "clsx";
// import "../_shared/control.css";

export function NativeSelect(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & {
    label?: React.ReactNode;
    hint?: React.ReactNode;
    error?: React.ReactNode;
  }
) {
  const { label, hint, error, className, children, ...rest } = props;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}
      <select className={clsx("ui-control", className)} {...rest}>
        {children}
      </select>
      {error ? <div className="ui-control__error">{error}</div> : hint ? <div className="ui-control__hint">{hint}</div> : null}
    </div>
  );
}
