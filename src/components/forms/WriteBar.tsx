import React from "react";
import { Button } from "../button/Button";
// import "./writebar.css";


export function WriteBar(props: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  const { value, onChange, onSend, placeholder = "Сообщение...", disabled } = props;

  return (
    <div className="ui-writebar">
      <div className="ui-writebar__inner">
        <textarea
          className="ui-writebar__input"
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          rows={1}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (!disabled) onSend();
            }
          }}
        />
        <Button variant="solid" tone="primary" disabled={disabled || value.trim().length === 0} onClick={onSend}>
          Отправить
        </Button>
      </div>
    </div>
  );
}
