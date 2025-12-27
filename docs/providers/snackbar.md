# Snackbar Provider

Tria UI поддерживает Snackbar как компонент и (опционально) как глобальный провайдер/хук.

## Component usage

```tsx
import { Snackbar } from "@tria/ui";

const [open, setOpen] = useState(false);

<Snackbar
  open={open}
  onOpenChange={setOpen}
  text="Saved"
  action={{ label: "Undo", onClick: () => {} }}
/>
```

## Provider usage (optional)

Если у вас есть `SnackbarProvider` и `useSnackbar()`:

```tsx
<SnackbarProvider>
  <App/>
</SnackbarProvider>
```

```ts
const { push } = useSnackbar();
push({ text: "Saved", action: { label: "OK", onClick: ... }});
```
