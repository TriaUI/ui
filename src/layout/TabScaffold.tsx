import React from "react";
import type { TabBarPlacement } from "../components/tabbar/TabBar";

export function TabScaffold(props: React.PropsWithChildren<{ placement: TabBarPlacement }>) {
    const { placement, children } = props;

    const style: React.CSSProperties =
        placement === "bottom"
            ? { paddingBottom: "calc(var(--tabbar-h) + var(--safe-bottom))" }
            : { paddingRight: "calc(var(--tabbar-w) + var(--safe-right) + var(--tabbar-gap) + 12px)" };

    return <div style={style}>{children}</div>;
}