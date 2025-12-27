import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
// import "./modal.css";


export function ModalCard(props: React.PropsWithChildren<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>) {
  const { open, onOpenChange, children } = props;
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="ui-sheet__overlay" />
        <Dialog.Content className="ui-sheet__content">
          <div className="ui-sheet__handle" aria-hidden />
          <div className="ui-sheet__body">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ModalCardBase(props: React.PropsWithChildren) {
  return <div style={{ display: "grid", gap: 12 }}>{props.children}</div>;
}
