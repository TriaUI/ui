# Feedback

Компоненты обратной связи: alert/progress/spinner/skeleton/snackbar/pull-to-refresh.

## Import

```ts
import { Alert, Progress, Spinner, Skeleton, Snackbar, PullToRefresh } from "@tria/ui";
```

## Snackbar

```tsx
const [open, setOpen] = useState(false);
<Snackbar open={open} onOpenChange={setOpen} text="Saved" />
```
