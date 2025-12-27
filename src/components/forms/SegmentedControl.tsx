import React from "react";
// import "./segmented.css";


export type SegmentedItem = { key: string; label: React.ReactNode; disabled?: boolean };

export function SegmentedControl(props: {
  items: SegmentedItem[];
  value: string;
  onChange: (key: string) => void;
}) {
  const { items, value, onChange } = props;
  return (
    <div className="ui-segmented" role="tablist" aria-label="Segmented control">
      {items.map((it) => {
        const active = it.key === value;
        return (
          <button
            key={it.key}
            type="button"
            className="ui-segmented__btn"
            data-active={active ? "true" : "false"}
            disabled={it.disabled}
            onClick={() => !it.disabled && onChange(it.key)}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
