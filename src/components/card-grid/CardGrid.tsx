import React from "react";
import clsx from "clsx";
// import "./card-grid.css";


export function CardGrid(
    props: React.PropsWithChildren<{
        cols?: 1 | 2 | 3;
        className?: string;
    }>
) {
    const cols = props.cols ?? 2;
    return (
        <div className={clsx("ui-cardgrid", props.className)} data-cols={String(cols)}>
            {props.children}
        </div>
    );
}
