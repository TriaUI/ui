import React from "react";
import clsx from "clsx";
// import "./info-row.css";


export function InfoRow(props: {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}) {
  const { label, value, className } = props;
  return (
    <div className={clsx("ui-inforow", className)}>
      <div className="ui-inforow__label">{label}</div>
      <div className="ui-inforow__value">{value}</div>
    </div>
  );
}
