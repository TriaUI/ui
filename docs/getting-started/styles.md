# Styles & Bundling

Tria UI использует **CSS tokens** и глобальные классы компонентов. Предпочтительная схема — один импорт CSS‑пакета.

## Recommended: global styles pack

```ts
import "@tria/ui/styles";
```

Преимущества:
- предсказуемый порядок слоёв (base → tokens → presets → components)
- меньше дублей CSS
- проще кастомизация (вы добавляете свой слой после `@tria/ui/styles`)

## Auto entry

```ts
import "@tria/ui/auto";
```

Подходит для быстрых прототипов. В production чаще используют отдельный импорт `@tria/ui/styles`.

## CSS entry layout

Внутри пакета (ориентир):

- `styles/base.css` — reset/база
- `styles/tokens.css` — базовые токены (`--ui-*`)
- `styles/presets.css` — platform/skin/theme значения
- `styles/components/*.css` — стили конкретных компонентов

## Don’t do

- Не импортируйте CSS из каждого компонента (можно получить дубли и хаос порядка).
- Не смешивайте `@tria/ui/auto` и `@tria/ui/styles` одновременно.
