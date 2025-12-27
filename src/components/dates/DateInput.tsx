import React from "react";
import clsx from "clsx";
// import "../_shared/control.css";

export function DateInput(props: {
  value?: string; // yyyy-mm-dd
  onChange: (value: string) => void;
  label?: React.ReactNode;
  className?: string;
}) {
  const { value, onChange, label, className } = props;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}
      <input
        type="date"
        className={clsx("ui-control", className)}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
