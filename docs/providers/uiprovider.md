# UIProvider

`UIProvider` — точка управления темой/платформой/скином и CSS overrides.

## Import

```ts
import { UIProvider } from "@tria/ui";
```

## Config

```ts
type UIConfig = Partial<{
  theme: "light" | "dark";
  platform: "web" | "vk" | "tg";
  skin: "web" | "ios" | "android";
  root: HTMLElement;
  vars: Record<`--${string}`, string>;
}>;
```

## Example

```tsx
<UIProvider config={{ theme: "light", platform: "vk", skin: "ios" }}>
  ...
</UIProvider>
```

## Notes

- избегайте deep-import UIProvider из внутренних путей — импортируйте из `@tria/ui`
- для `vars` используйте `useMemo`, чтобы не создавать новый объект на каждый рендер
