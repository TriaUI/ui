# Modals & Overlays

Набор оверлеев: ActionSheet, ModalCard, ModalPage, Popover/Tooltip.

## Import

```ts
import { ActionSheet, ModalCard, ModalPage, Popover, Tooltip } from "@tria/ui";
```

## ActionSheet

```tsx
<ActionSheet
  open={open}
  onOpenChange={setOpen}
  title="Actions"
  actions={[
    { title: "Save", onClick: () => {} },
    { title: "Delete", tone: "destructive", onClick: () => {} },
  ]}
/>
```

## Tokens

- `--modal-w`, `--modal-p`, `--modal-radius`
- `--modal-overlay`, `--modal-blur`
