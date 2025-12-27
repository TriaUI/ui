# Presets: web/vk/tg × ios/android × light/dark

`presets.css` — слой, который задаёт значения токенов в зависимости от:

- `data-theme`
- `data-platform`
- `data-skin`

## iOS (Cupertino feel)

Для `data-skin="ios"` характерно:
- выше контролы (`--btn-h-md: 44px`, `--input-h-md: 44px`)
- более мягкие радиусы (`--ui-radius: 16px`)
- более “воздушные” отступы
- умеренный blur/overlay в модалках

## Android (Material feel)

Для `data-skin="android"` характерно:
- более компактные радиусы (`--ui-radius: 12px`)
- высоты ближе к material baseline
- более “плоское” ощущение

## Platform accents

- `vk` → `--ui-primary: #2d81e0`
- `tg` → `--ui-primary: #3390ec`

## Debug checklist

1) Проверьте, что `UIProvider` ставит `data-*` на `documentElement`.
2) Проверьте, что компоненты используют токены, а не захардкоженные px.
3) Убедитесь, что `@tria/ui/styles` импортируется один раз.
