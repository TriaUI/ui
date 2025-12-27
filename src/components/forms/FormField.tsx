import React from "react";

export function FormField(props: React.PropsWithChildren<{ label?: React.ReactNode; hint?: React.ReactNode; error?: React.ReactNode }>) {
  const { label, hint, error, children } = props;
  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}
      {children}
      {error ? (
        <div style={{ color: "color-mix(in oklab, var(--ui-danger) 85%, white)", fontSize: 12 }}>{error}</div>
      ) : hint ? (
        <div style={{ color: "var(--ui-muted)", fontSize: 12 }}>{hint}</div>
      ) : null}
    </div>
  );
}
