# VK Mini Apps

## Recommended config

```tsx
<UIProvider config={{ platform: "vk", skin: "ios", theme: "dark" }} />
```

Для Android:

```tsx
<UIProvider config={{ platform: "vk", skin: "android", theme: "dark" }} />
```

## Safe areas

Используйте токены `--safe-*` (или задайте их через vars), если окружение отдаёт insets.

## Navigation

Паттерн:
- верхняя панель с back‑кнопкой
- TabBar на главных разделах
- list/cell для настроек
