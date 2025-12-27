# Cells & Lists

Списки и ячейки — основной паттерн для настроек и навигации.

## Import

```ts
import { List, Cell, SimpleCell, RichCell } from "@tria/ui";
```

## Examples

```tsx
<List>
  <Cell title="Profile" subtitle="Account settings" chevron />
  <Cell title="Notifications" after="12" chevron />
</List>
```

## Design tokens

- `--cell-h`, `--cell-px`, `--cell-gap`
- `--cell-before`, `--cell-chev`
- `--cell-badge-*`
