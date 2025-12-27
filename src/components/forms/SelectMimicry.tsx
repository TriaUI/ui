import React from "react";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
// import "../_shared/control.css";
// import "./select-mimicry.css";

export type MimicOption = { key: string; label: string; description?: string; disabled?: boolean };

export function SelectMimicry(props: {
  valueKey?: string;
  onChange: (key: string) => void;
  options: MimicOption[];
  placeholder?: string;
  label?: React.ReactNode;
  className?: string;
}) {
  const { valueKey, onChange, options, placeholder = "Выберите...", label, className } = props;

  const selected = options.find((o) => o.key === valueKey);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {label ? <div style={{ fontWeight: 700, fontSize: 13 }}>{label}</div> : null}

      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button" className={clsx("ui-control", "ui-mimic__trigger", className)}>
            <span style={{ opacity: selected ? 1 : 0.7 }}>{selected?.label ?? placeholder}</span>
            <span className="ui-mimic__chev">▾</span>
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content className="ui-mimic__content" sideOffset={8} align="start">
            {options.map((o) => (
              <button
                key={o.key}
                type="button"
                className="ui-mimic__item"
                disabled={o.disabled}
                onClick={() => {
                  if (o.disabled) return;
                  onChange(o.key);
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 13 }}>{o.label}</div>
                {o.description ? <div style={{ color: "var(--ui-muted)", fontSize: 12, marginTop: 2 }}>{o.description}</div> : null}
              </button>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
