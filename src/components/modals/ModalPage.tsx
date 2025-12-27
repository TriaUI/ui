import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
// import "./modal.css";


export function ModalPage(props: React.PropsWithChildren<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>) {
  const { open, onOpenChange, children } = props;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="ui-sheet__overlay" />
        <Dialog.Content className="ui-modalpage__content">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ModalPageHeader(props: React.PropsWithChildren<{
  title: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}>) {
  const { title, left, right } = props;
  return (
    <div className="ui-modalpage__header">
      {left ? <div>{left}</div> : null}
      <div className="ui-modalpage__title">{title}</div>
      {right ? <div>{right}</div> : null}
    </div>
  );
}

export function ModalPageBody(props: React.PropsWithChildren) {
  return <div className="ui-modalpage__body">{props.children}</div>;
}
