import * as Popover from "@radix-ui/react-popover";

export const PopoverRoot = Popover.Root;
export const PopoverTrigger = Popover.Trigger;
export const PopoverClose = Popover.Close;

export function PopoverContent(props: Popover.PopoverContentProps) {
  return (
    <Popover.Portal>
      <Popover.Content
        {...props}
        style={{
          background: "var(--ui-panel)",
          border: "1px solid var(--ui-border)",
          borderRadius: "var(--ui-radius)",
          boxShadow: "var(--ui-shadow)",
          padding: 10,
          ...props.style
        }}
      />
    </Popover.Portal>
  );
}
