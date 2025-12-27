import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
// import "./modal.css";


export type ActionSheetAction = {
  key: string;
  label: string;
  tone?: "default" | "danger";
  disabled?: boolean;
  onPress: () => void;
};

export function ActionSheet(props: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  actions: ActionSheetAction[];
  cancelText?: string;
}) {
  const { open, onOpenChange, title, actions, cancelText = "Отмена" } = props;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="ui-sheet__overlay" />
        <Dialog.Content className="ui-sheet__content">
          <div className="ui-sheet__handle" aria-hidden />
          <div className="ui-sheet__body">
            {title ? <div style={{ fontWeight: 800, marginBottom: 10 }}>{title}</div> : null}

            <div style={{ display: "grid", gap: 8 }}>
              {actions.map((a) => (
                <button
                  key={a.key}
                  type="button"
                  className="ui-actions__btn"
                  data-tone={a.tone ?? "default"}
                  disabled={a.disabled}
                  onClick={() => {
                    if (a.disabled) return;
                    a.onPress();
                    onOpenChange(false);
                  }}
                >
                  {a.label}
                </button>
              ))}
              <button type="button" className="ui-actions__btn" onClick={() => onOpenChange(false)}>
                {cancelText}
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
