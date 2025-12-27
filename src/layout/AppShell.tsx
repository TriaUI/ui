import React from "react";
import "./appshell.css";
import {Button} from "../components/button/Button";

export type AppShellProps = React.PropsWithChildren<{
    title?: string;
    back?: {
        visible: boolean;
        onPress: () => void;
        label?: string;
    };
    headerRight?: React.ReactNode;
}>;

export function AppShell({ title, back, headerRight, children }: AppShellProps) {
    return (
        <div className="ui-appshell">
            <div className="ui-appshell__header">
                <div className="ui-appshell__headerInner">
                    {back?.visible ? (
                        <Button variant="ghost" tone="neutral" size="sm" onClick={back.onPress}>
                            {back.label ?? "Назад"}
                        </Button>
                    ) : null}

                    <div className="ui-appshell__title" style={{ flex: 1 }}>
                        {title ?? ""}
                    </div>

                    {headerRight}
                </div>
            </div>

            <div className="ui-appshell__content">{children}</div>
        </div>
    );
}
