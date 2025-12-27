import React from "react";
import clsx from "clsx";
// import "./separator.css";


export function Separator({ className }: { className?: string }) {
    return <div className={clsx("ui-separator", className)} role="separator" />;
}
