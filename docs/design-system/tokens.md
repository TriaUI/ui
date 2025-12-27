# Tokens overview

Tria UI строится на CSS переменных. База начинается с `--ui-*`, а компоненты используют специализированные токены.

## Global tokens (`--ui-*`)

- `--ui-bg`, `--ui-panel`, `--ui-fg`, `--ui-muted`
- `--ui-border`, `--ui-shadow`
- `--ui-primary`, `--ui-primary-fg`
- `--ui-radius`, `--ui-radius-sm`, `--ui-radius-lg`
- `--ui-space-1..4`
- `--ui-ease`, `--ui-duration*`
- `--safe-top/right/bottom/left`

## Component tokens (examples)

### Button
- `--btn-h-sm/md/lg`
- `--btn-px-sm/md/lg`
- `--btn-radius`
- `--btn-gap`

### Input
- `--input-h-sm/md/lg`
- `--input-px`
- `--input-radius`

### Cell
- `--cell-h`, `--cell-px`, `--cell-gap`
- `--cell-before`, `--cell-chev`
- `--cell-badge-*`

### Modal
- `--modal-w`, `--modal-p`, `--modal-radius`, `--modal-overlay`, `--modal-blur`

### Calendar
- `--cal-day`, `--cal-day-radius`, `--cal-gap`

## Where tokens are set

- `tokens.css` — базовые значения и алиасы
- `presets.css` — значения под theme/platform/skin
- кастомизация — через `UIProvider.config.vars` или отдельным CSS слоем в приложении
