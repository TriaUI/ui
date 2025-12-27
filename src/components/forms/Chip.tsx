import React from "react";
// import "./chips.css";


export function Chip(props: { label: string; onRemove?: () => void }) {
  return (
    <span className="ui-chip">
      <span>{props.label}</span>
      {props.onRemove ? (
        <button type="button" className="ui-chip__x" onClick={props.onRemove} aria-label="Remove">
          ×
        </button>
      ) : null}
    </span>
  );
}
