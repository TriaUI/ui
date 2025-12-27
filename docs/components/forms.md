# Forms

Набор форм‑компонентов: input/select/chips/segmented/file/writebar.

## Import (examples)

```ts
import {
  Input, Textarea, Switch, Checkbox, Radio,
  Slider, SegmentedControl,
  NativeSelect, CustomSelect, SelectMimicry,
  ChipsInput, ChipsSelect,
  DropZone, File,
  WriteBar
} from "@tria/ui";
```

## Controlled inputs

Все поля предпочтительно держать controlled (через state), чтобы унифицировать поведение на платформах.

## Design tokens

- `--input-h-*`, `--input-radius`, `--input-px`
- `--chip-*`, `--chipsbox-*` (если применимо)
