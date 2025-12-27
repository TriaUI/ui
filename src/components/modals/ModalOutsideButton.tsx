import React from "react";
import { Button } from "../button/Button";

export function ModalOutsideButton(props: React.PropsWithChildren<{ onPress: () => void }>) {
  return (
    <div style={{ paddingTop: 10 }}>
      <Button variant="outline" tone="neutral" onClick={props.onPress}>
        {props.children}
      </Button>
    </div>
  );
}
