import React from "react";
// import "./checkable.css";


export function Checkbox(props: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
}) {
  const { checked, onChange, label, description, disabled } = props;

  return (
    <div
      className="ui-check"
      data-checked={checked ? "true" : "false"}
      aria-disabled={disabled ? "true" : "false"}
      onClick={() => {
        if (disabled) return;
        onChange(!checked);
      }}
      role="checkbox"
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
      <span className="ui-check__box" aria-hidden>
        <span className="ui-check__mark" />
      </span>

      <span>
        {label ? <div className="ui-check__label">{label}</div> : null}
        {description ? <div className="ui-check__desc">{description}</div> : null}
      </span>
    </div>
  );
}
