import React from "react";
import clsx from "clsx";
// import "../_shared/control.css";
// import "./input.css";


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Input(props: InputProps) {
  const { label, hint, error, leftIcon, rightIcon, className, ...rest } = props;

  const hasLeft = Boolean(leftIcon);
  const hasRight = Boolean(rightIcon);

  return (
    <div className="ui-input__wrap">
      {label ? <div className="ui-input__label">{label}</div> : null}

      <div className="ui-input__fieldWrap">
        {hasLeft ? <span className="ui-input__iconLeft">{leftIcon}</span> : null}
        {hasRight ? <span className="ui-input__iconRight">{rightIcon}</span> : null}

        <input
          className={clsx(
            "ui-control",
            hasLeft && "ui-input__withLeft",
            hasRight && "ui-input__withRight",
            className
          )}
          {...rest}
        />
      </div>

      {error ? <div className="ui-control__error">{error}</div> : hint ? <div className="ui-control__hint">{hint}</div> : null}
    </div>
  );
}
