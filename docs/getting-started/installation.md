# Installation

## Requirements
- React 18+
- TypeScript 5+ (рекомендуется)
- Vite 5+ (для dev/примера)

## Install

```bash
pnpm add @tria/ui
```

## Import styles

Рекомендуемый способ:

```ts
import "@tria/ui/styles";
```

Альтернатива:

```ts
import "@tria/ui/auto";
```

## First render

```tsx
import React from "react";
import { UIProvider, Button } from "@tria/ui";

export function App() {
  return (
    <UIProvider config={{ theme: "dark", platform: "web", skin: "ios" }}>
      <Button data-variant="primary">Hello Tria</Button>
    </UIProvider>
  );
}
```

## Monorepo note (pnpm workspaces)

Если `@tria/ui` подключён как workspace‑пакет, и вы используете `package.json#exports`,
избегайте deep‑imports вида `@tria/ui/src/...`. Все публичные сущности должны импортироваться из `@tria/ui`:

✅ `import { TabBar } from "@tria/ui";`  
❌ `import { TabBar } from "@tria/ui/src/components/tabbar/TabBar";`
