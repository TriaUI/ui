import React from "react";

export function FormItem(props: React.PropsWithChildren) {
  return <div style={{ display: "grid", gap: 12 }}>{props.children}</div>;
}
