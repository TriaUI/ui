import React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
// import "./dialog.css";


export const Dialog = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;
export const DialogClose = RadixDialog.Close;

export function DialogContent(
    props: React.PropsWithChildren<{
        title?: string;
        description?: string;
    }> & RadixDialog.DialogContentProps
) {
    const { children, title, description, ...rest } = props;

    return (
        <RadixDialog.Portal>
            <RadixDialog.Overlay className="ui-dialog__overlay" />
            <RadixDialog.Content className="ui-dialog__content" {...rest}>
                {title ? <RadixDialog.Title className="ui-dialog__title">{title}</RadixDialog.Title> : null}
                {description ? <RadixDialog.Description className="ui-dialog__desc">{description}</RadixDialog.Description> : null}
                <div style={{ marginTop: 14 }}>{children}</div>
            </RadixDialog.Content>
        </RadixDialog.Portal>
    );
}
