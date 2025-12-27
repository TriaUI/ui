import * as Tooltip from "@radix-ui/react-tooltip";

export const TooltipProvider = Tooltip.Provider;
export const TooltipRoot = Tooltip.Root;
export const TooltipTrigger = Tooltip.Trigger;

export function TooltipContent(props: Tooltip.TooltipContentProps) {
  return (
    <Tooltip.Portal>
      <Tooltip.Content
        sideOffset={props.sideOffset ?? 8}
        {...props}
        style={{
          background: "var(--ui-panel)",
          border: "1px solid var(--ui-border)",
          borderRadius: "999px",
          boxShadow: "var(--ui-shadow)",
          padding: "6px 10px",
          fontSize: 12,
          color: "var(--ui-fg)",
          ...props.style
        }}
      />
    </Tooltip.Portal>
  );
}
