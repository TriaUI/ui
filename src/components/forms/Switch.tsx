import React from "react";
// import "./switch.css";


export function Switch(props: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
}) {
  const { checked, onChange, label, disabled } = props;

  return (
    <div
      className="ui-switch"
      data-checked={checked ? "true" : "false"}
      aria-disabled={disabled ? "true" : "false"}
      onClick={() => {
        if (disabled) return;
        onChange(!checked);
      }}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <span className="ui-switch__track" aria-hidden>
        <span className="ui-switch__thumb" />
      </span>
      {label ? <span className="ui-switch__label">{label}</span> : null}
    </div>
  );
}
