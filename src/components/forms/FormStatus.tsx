import React from "react";
import { Alert } from "../feedback/Alert";

export function FormStatus(props: { type: "info" | "success" | "warning" | "error"; title: string; description?: string }) {
  const { type, title, description } = props;
  const variant =
    type === "success" ? "success" :
    type === "error" ? "danger" :
    type === "warning" ? "warning" : "neutral";

  return <Alert variant={variant} title={title} description={description} />;
}
