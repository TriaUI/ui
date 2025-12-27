import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../button/Button";

export function ModalDismissButton(props: { children?: React.ReactNode }) {
  return (
    <Dialog.Close asChild>
      <Button variant="ghost" tone="neutral" size="sm">
        {props.children ?? "Закрыть"}
      </Button>
    </Dialog.Close>
  );
}
