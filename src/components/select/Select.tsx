import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
// import "./select.css";


export const Select = RadixSelect.Root;
export const SelectValue = RadixSelect.Value;

export function SelectTrigger(props: RadixSelect.SelectTriggerProps) {
    return <RadixSelect.Trigger className="ui-select__trigger" {...props} />;
}

export function SelectContent(props: RadixSelect.SelectContentProps) {
    return (
        <RadixSelect.Portal>
            <RadixSelect.Content className="ui-select__content" position="popper" sideOffset={8} {...props}>
                <RadixSelect.Viewport>{props.children}</RadixSelect.Viewport>
            </RadixSelect.Content>
        </RadixSelect.Portal>
    );
}

export function SelectItem(
    props: React.PropsWithChildren<{ value: string }> & RadixSelect.SelectItemProps
) {
    const { children, ...rest } = props;
    return (
        <RadixSelect.Item className="ui-select__item" {...rest}>
            <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </RadixSelect.Item>
    );
}
