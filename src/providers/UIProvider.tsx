import React from "react";
import "../styles/base.css";
import "../styles/tokens.css";
import "../styles/presets.css";

export type UITheme = "light" | "dark";
export type UIPlatform = "web" | "vk" | "tg";
export type UISkin = "web" | "ios" | "android";

export type UIButtonOverrides = Partial<{
    radius: string;  // "--btn-radius"
    primary: string; // "--ui-primary"
    panel: string;   // "--ui-panel"
}>;

export type UIVars = Record<`--${string}`, string>;

export type UIConfig = Partial<{
    theme: UITheme;
    platform: UIPlatform;
    skin: UISkin;

    button: UIButtonOverrides;

    root: HTMLElement;
    vars: UIVars;
}>;

function applyVars(root: HTMLElement, vars?: UIVars) {
    if (!vars) return;
    for (const [k, v] of Object.entries(vars)) {
        if (typeof v === "string") root.style.setProperty(k, v);
    }
}

function removeVars(root: HTMLElement, vars?: UIVars) {
    if (!vars) return;
    for (const k of Object.keys(vars)) root.style.removeProperty(k);
}

export function UIProvider({ children, config }: React.PropsWithChildren<{ config?: UIConfig }>) {
    React.useEffect(() => {
        const root = config?.root ?? document.documentElement;

        const theme: UITheme = config?.theme ?? "dark";
        const platform: UIPlatform = config?.platform ?? "web";
        const skin: UISkin = config?.skin ?? "web";

        const prevTheme = root.dataset.theme;
        const prevPlatform = root.dataset.platform;
        const prevSkin = root.dataset.skin;

        root.dataset.theme = theme;
        root.dataset.platform = platform;
        root.dataset.skin = skin;

        const buttonVars: UIVars = {
            ...(config?.button?.radius ? { "--btn-radius": config.button.radius } : {}),
            ...(config?.button?.primary ? { "--ui-primary": config.button.primary } : {}),
            ...(config?.button?.panel ? { "--ui-panel": config.button.panel } : {}),
        };

        applyVars(root, buttonVars);
        applyVars(root, config?.vars);

        return () => {
            if (prevTheme === undefined) delete root.dataset.theme;
            else root.dataset.theme = prevTheme;

            if (prevPlatform === undefined) delete root.dataset.platform;
            else root.dataset.platform = prevPlatform;

            if (prevSkin === undefined) delete root.dataset.skin;
            else root.dataset.skin = prevSkin;

            removeVars(root, buttonVars);
            removeVars(root, config?.vars);
        };
    }, [
        config?.root,
        config?.theme,
        config?.platform,
        config?.skin,
        config?.button?.radius,
        config?.button?.primary,
        config?.button?.panel,
        config?.vars,
    ]);

    return <>{children}</>;
}
