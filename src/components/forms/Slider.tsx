import React from "react";
// import "./slider.css";


export function Slider(props: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: React.ReactNode;
  formatValue?: (v: number) => string;
}) {
  const { value, onChange, min = 0, max = 100, step = 1, label, formatValue } = props;

  return (
    <div className="ui-slider">
      <div className="ui-slider__row">
        {label ? <div className="ui-slider__label">{label}</div> : <div />}
        <div className="ui-slider__value">{(formatValue ?? String)(value)}</div>
      </div>

      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
