import React from "react";
// import "./progress.css";


export function Progress(props: { value: number; max?: number }) {
  const { value, max = 100 } = props;
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="ui-progress" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      <div className="ui-progress__bar" style={{ width: pct + "%" }} />
    </div>
  );
}
