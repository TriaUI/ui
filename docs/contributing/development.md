# Local development

Рекомендуемая схема для монорепо (pnpm):

```bash
pnpm i
pnpm -C packages/ui dev
pnpm -C apps/web dev
```

## Vite library mode

Tria UI собирается через Vite library mode. Для docs важны:
- корректные `exports` в `package.json`
- запрет deep-imports (`@tria/ui/src/...`) в приложениях
