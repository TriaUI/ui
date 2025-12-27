# Customization without forking

Цель: дать пользователю возможность менять дизайн **не изменяя библиотеку**.

Есть три уровня кастомизации:

## 1) Switch theme/platform/skin

```tsx
<UIProvider config={{ theme: "dark", platform: "vk", skin: "ios" }} />
```

## 2) Runtime overrides (vars)

```tsx
<UIProvider
  config={{
    vars: {
      "--ui-primary": "#ff2d55",
      "--btn-radius": "18px",
      "--input-h-md": "46px",
    }
  }}
/>
```

## 3) App-level CSS layer

```css
:root[data-platform="web"]{
  --ui-primary: #8b5cf6;
}
```

## Contract (совместимость)

Мы считаем частью публичного контракта:
- имена токенов `--ui-*` и `--btn-*`/`--input-*`/…
- data attributes `data-theme`, `data-platform`, `data-skin`

Изменения этих сущностей должны быть semver‑major.
