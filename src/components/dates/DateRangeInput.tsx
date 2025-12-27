import React from "react";
import clsx from "clsx";
// import "../_shared/control.css";

export function DateRangeInput(props: {
  start?: string;
  end?: string;
  onChange: (v: { start?: string; end?: string }) => void;
  label?: React.ReactNode;
}) {
  const { start, end, onChange, label } = props;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <input
          type="date"
          className={clsx("ui-control")}
          value={start ?? ""}
          onChange={(e) => onChange({ start: e.target.value, end })}
        />
        <input
          type="date"
          className={clsx("ui-control")}
          value={end ?? ""}
          onChange={(e) => onChange({ start, end: e.target.value })}
        />
      </div>
    </div>
  );
}
