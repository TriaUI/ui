import React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
// import "./card.css";

export type CardVariant = "default" | "flat" | "outline";

export type CardProps = React.PropsWithChildren<{
    className?: string;
    variant?: CardVariant;
    clickable?: boolean;
    asChild?: boolean;
}> & React.HTMLAttributes<HTMLElement>;

export function Card({
                         className,
                         variant = "default",
                         clickable,
                         asChild,
                         children,
                         ...rest
                     }: CardProps) {
    const Comp: any = asChild ? Slot : "div";

    return (
        <Comp
            className={clsx("ui-card", className)}
            data-variant={variant}
            data-clickable={clickable ? "true" : "false"}
            {...rest}
        >
            {children}
        </Comp>
    );
}

export function CardHeader(props: React.PropsWithChildren<{ className?: string }>) {
    return <div className={clsx("ui-card__header", props.className)}>{props.children}</div>;
}

export function CardTitle(props: React.PropsWithChildren<{ className?: string }>) {
    return <h4 className={clsx("ui-card__title", props.className)}>{props.children}</h4>;
}

export function CardSubtitle(props: React.PropsWithChildren<{ className?: string }>) {
    return <p className={clsx("ui-card__subtitle", props.className)}>{props.children}</p>;
}

export function CardContent(props: React.PropsWithChildren<{ className?: string }>) {
    return <div className={clsx("ui-card__content", props.className)}>{props.children}</div>;
}

export function CardFooter(props: React.PropsWithChildren<{ className?: string }>) {
    return <div className={clsx("ui-card__footer", props.className)}>{props.children}</div>;
}
