import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonCva = cva("ui-btn", {
    variants: {
        variant: { solid: "", outline: "", ghost: "" },
        tone: { primary: "", neutral: "", danger: "" },
        size: { sm: "", md: "", lg: "" },
    },
    defaultVariants: { variant: "solid", tone: "primary", size: "md" },
});

export type ButtonProps =
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonCva>;

export function Button({ className, variant, tone, size, ...rest }: ButtonProps) {
    return (
        <button
            className={clsx(buttonCva({ variant, tone, size }), className)}
            data-variant={variant ?? "solid"}
            data-tone={tone ?? "primary"}
            data-size={size ?? "md"}
            {...rest}
        />
    );
}
