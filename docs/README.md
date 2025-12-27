# Tria UI

**Tria UI** — UI‑кит и набор паттернов для разработки интерфейсов с единым дизайном под:
- Web
- VK Mini Apps
- Telegram Mini Apps

Цель: единый API компонентов и единый подход к токенам/темам (`theme/platform/skin`), чтобы ваш интерфейс выглядел нативно (в том числе **Cupertino‑ощущение** на iOS).

---

## Быстрый старт

1) Установите пакет:

```bash
pnpm add @tria/ui
# или npm i @tria/ui / yarn add @tria/ui
```

2) Подключите стили (рекомендуется):

```ts
import "@tria/ui/styles";
```

3) Оберните приложение провайдером:

```tsx
import React from "react";
import { UIProvider } from "@tria/ui";

export function App() {
  return (
    <UIProvider config={{ theme: "dark", platform: "web", skin: "ios" }}>
      {/* ... */}
    </UIProvider>
  );
}
```

---

## Два способа подключения стилей

### Вариант A: отдельный импорт CSS (рекомендуется)

```ts
import "@tria/ui/styles";
import { UIProvider, Button } from "@tria/ui";
```

### Вариант B: auto‑entry

Если вы хотите одним импортом подтянуть и JS и CSS:

```ts
import "@tria/ui/auto";
import { UIProvider, Button } from "@tria/ui";
```

> Не используйте `@tria/ui/styles` вместе с `@tria/ui/auto`, чтобы не получить двойную загрузку CSS.

---

## Ключевые понятия

- **theme**: `light | dark`
- **platform**: `web | vk | tg`
- **skin**: `web | ios | android`

Комбинации параметров управляют пресетами (`presets.css`) и компонентными токенами (`--btn-*`, `--input-*`, `--cell-*`, `--tabbar-*`, …).

---

## Контакты и вклад в проект

См. раздел **Contributing**.
