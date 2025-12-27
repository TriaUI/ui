import React from "react";
// import "./checkable.css";


export function Radio(props: {
  checked: boolean;
  onChange: () => void;
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
        onChange();
      }}
      role="radio"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange();
        }
      }}
    >
      <span className="ui-check__box" aria-hidden style={{ borderRadius: 999 }}>
        <span className="ui-check__mark" style={{ borderRadius: 999 }} />
      </span>

      <span>
        {label ? <div className="ui-check__label">{label}</div> : null}
        {description ? <div className="ui-check__desc">{description}</div> : null}
      </span>
    </div>
  );
}
