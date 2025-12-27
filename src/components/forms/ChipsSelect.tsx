import React from "react";
import { Chip } from "./Chip";
// import "./chips.css";

import { SelectMimicry, type MimicOption } from "./SelectMimicry";

export function ChipsSelect(props: {
  value: string[];
  onChange: (value: string[]) => void;
  options: MimicOption[];
  label?: React.ReactNode;
}) {
  const { value, onChange, options, label } = props;

  const available = options.filter((o) => !value.includes(o.key));

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}

      <div className="ui-chipsbox">
        <div className="ui-chiprow">
          {value.map((k) => (
            <Chip
              key={k}
              label={options.find((o) => o.key === k)?.label ?? k}
              onRemove={() => onChange(value.filter((x) => x !== k))}
            />
          ))}
        </div>

        <SelectMimicry
          valueKey={undefined}
          onChange={(k) => onChange([...value, k])}
          options={available}
          placeholder={available.length ? "Добавить..." : "Все добавлено"}
        />
      </div>
    </div>
  );
}
