import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
// import "./custom-select.css";


export type SelectOption = { value: string; label: string; disabled?: boolean };

export function CustomSelect(props: {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}) {
  const { value, onChange, options, placeholder, label, hint, error } = props;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}

      <RadixSelect.Root value={value} onValueChange={onChange}>
        <RadixSelect.Trigger className="ui-customselect__trigger">
          <RadixSelect.Value placeholder={placeholder ?? "Выберите..."} />
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className="ui-customselect__content" position="popper" sideOffset={8}>
            <RadixSelect.Viewport>
              {options.map((o) => (
                <RadixSelect.Item key={o.value} value={o.value} disabled={o.disabled} className="ui-customselect__item">
                  <RadixSelect.ItemText>{o.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>

      {error ? <div className="ui-control__error">{error}</div> : hint ? <div className="ui-control__hint">{hint}</div> : null}
    </div>
  );
}
