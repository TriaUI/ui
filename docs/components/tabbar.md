# TabBar

TabBar — навигация нижнего уровня (в стиле mobile). В web/tablet режимах может менять размещение.

## Import

```ts
import { TabBar } from "@tria/ui";
```

## Basic

```tsx
<TabBar
  items={[
    { id: "home", label: "Home" },
    { id: "search", label: "Search" },
    { id: "profile", label: "Profile" },
  ]}
  value={tab}
  onChange={setTab}
  placement="bottom"
/>
```

## Responsive placement

- mobile portrait → `bottom`
- desktop/tablet landscape → `right-top | right-center | right-bottom`

## Design tokens

- `--tabbar-h`
- `--tabbar-radius`
- `--tabbar-w`
- `--tabbar-gap`
- `--safe-bottom/right`
