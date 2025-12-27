import React from "react";
import clsx from "clsx";
// import "./group.css";


export type GroupMode = "plain" | "panel";

export type GroupProps = React.PropsWithChildren<{
    title?: React.ReactNode;
    description?: React.ReactNode;
    aside?: React.ReactNode;      // справа, например кнопка/ссылка
    mode?: GroupMode;             // plain | panel
    className?: string;
}>;

export function Group({
                          title,
                          description,
                          aside,
                          mode = "plain",
                          className,
                          children,
                      }: GroupProps) {
    const hasHeader = Boolean(title || description || aside);

    return (
        <section className={clsx("ui-group", className)} data-mode={mode}>
            {hasHeader ? (
                <div className="ui-group__header">
                    <div style={{ display: "grid", gap: 4 }}>
                        {title ? <h3 className="ui-group__title">{title}</h3> : null}
                        {description ? <p className="ui-group__hint">{description}</p> : null}
                    </div>
                    {aside ? <div>{aside}</div> : null}
                </div>
            ) : null}

            {mode === "panel" ? (
                <div className="ui-group__body">
                    <div className="ui-group__panel">{children}</div>
                </div>
            ) : (
                <div className="ui-group__body">{children}</div>
            )}
        </section>
    );
}
