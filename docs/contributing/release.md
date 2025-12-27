# Release & versioning

Semver рекомендации:

- **patch**: bugfix, не меняющий API и имена токенов
- **minor**: новые компоненты, новые токены (обратно совместимо)
- **major**: изменения публичного контракта (имена токенов, props, data‑атрибуты)

## Public contract

Часть публичного API:
- экспортируемые компоненты из `@tria/ui`
- имена токенов (`--ui-*`, `--btn-*`, `--input-*`, …)
- `data-theme/platform/skin`
