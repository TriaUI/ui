# Theming (theme/platform/skin)

Tria UI использует три измерения конфигурации:

- `theme`: `light | dark`
- `platform`: `web | vk | tg`
- `skin`: `web | ios | android`

Комбинация управляет *CSS пресетами* и компонентными токенами.

## UIProvider

```tsx
import { UIProvider } from "@tria/ui";

<UIProvider config={{ theme: "dark", platform: "vk", skin: "ios" }}>
  ...
</UIProvider>
```

UIProvider устанавливает `data-theme`, `data-platform`, `data-skin` на `document.documentElement`
(или на `config.root`), и может применить `config.vars` — набор CSS variables.

## Runtime switching

```tsx
const [theme, setTheme] = useState<"light"|"dark">("dark");
<UIProvider config={{ theme, platform, skin }} />
```

## Which combos matter

- `platform="vk" + skin="ios"` — VK iOS‑вид (Cupertino‑ощущение)
- `platform="vk" + skin="android"` — VK Android‑вид (Material‑ощущение)
- `platform="tg"` — более “telegram‑ui” акценты
- `platform="web"` — нейтральный web preset

## Troubleshooting

Если визуально не меняется “skin”, значит компоненты ещё используют жёсткие px.
Нужно заменить размеры на токены (`--btn-*`, `--input-*`, `--cell-*`, `--tabbar-*`) и т.п.
