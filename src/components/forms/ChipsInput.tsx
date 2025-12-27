import React from "react";
import { Chip } from "./Chip";
// import "./chips.css";


export function ChipsInput(props: {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  label?: React.ReactNode;
}) {
  const { value, onChange, placeholder = "Введите и нажмите Enter", label } = props;
  const [text, setText] = React.useState("");

  const add = () => {
    const v = text.trim();
    if (!v) return;
    if (value.includes(v)) {
      setText("");
      return;
    }
    onChange([...value, v]);
    setText("");
  };

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}
      <div className="ui-chipsbox">
        <div className="ui-chiprow">
          {value.map((v) => (
            <Chip key={v} label={v} onRemove={() => onChange(value.filter((x) => x !== v))} />
          ))}
          <input
            className="ui-chipsinput__input"
            value={text}
            placeholder={placeholder}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                add();
              }
              if (e.key === "Backspace" && text.length === 0 && value.length > 0) {
                onChange(value.slice(0, -1));
              }
            }}
          />
        </div>
        <div style={{ color: "var(--ui-muted)", fontSize: 12 }}>
          Подсказка: Enter — добавить, Backspace — удалить последний.
        </div>
      </div>
    </div>
  );
}
