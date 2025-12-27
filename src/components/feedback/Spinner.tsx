import React from "react";
// import "./spinner.css";


export function Spinner() {
  return <div className="ui-spinner" aria-label="Loading" />;
}

export function ScreenSpinner(props: { visible: boolean; label?: string }) {
  if (!props.visible) return null;
  return (
    <div className="ui-screenspinner" role="status" aria-live="polite">
      <div style={{ display: "grid", gap: 10, placeItems: "center" }}>
        <Spinner />
        {props.label ? <div style={{ color: "white", fontWeight: 700 }}>{props.label}</div> : null}
      </div>
    </div>
  );
}
