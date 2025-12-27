import React from "react";
import clsx from "clsx";
// import "./tabbar.css";

export type TabBarItem = {
    key: string;
    label: string;
    icon?: React.ReactNode | ((active: boolean) => React.ReactNode);

    badge?: number | "dot";

    disabled?: boolean;

    to?: string;

    onPress?: () => void;
};

export type TabBarPlacement =
    | "bottom"
    | "right-top"
    | "right-center"
    | "right-bottom";

export type TabBarProps = {
    items: TabBarItem[];
    activeKey: string;
    onChange?: (key: string) => void;

    className?: string;
    showLabels?: boolean;

    placement?: TabBarPlacement;

    renderItem?: (args: {
        item: TabBarItem;
        active: boolean;
        content: React.ReactNode;
        defaultOnClick: () => void;
    }) => React.ReactNode;
};


export function TabBar({
                           items,
                           activeKey,
                           onChange,
                           className,
                           showLabels = true,
                           placement = "bottom",
                           renderItem,
                       }: TabBarProps) {
    return (
        <nav
            className={clsx("ui-tabbar", className)}
            aria-label="Tab bar"
            data-placement={placement}
        >
            <div className="ui-tabbar__inner">
                {items.map((item) => {
                    const active = item.key === activeKey;

                    const iconNode =
                        typeof item.icon === "function" ? item.icon(active) : item.icon;

                    const content = (
                        <button
                            type="button"
                            className="ui-tabbar__item"
                            data-active={active ? "true" : "false"}
                            disabled={item.disabled}
                            onClick={() => {
                                if (item.disabled) return;
                                item.onPress?.();
                                onChange?.(item.key);
                            }}
                        >
              <span className="ui-tabbar__stack">
                <span className="ui-tabbar__iconWrap" aria-hidden>
                  {iconNode}
                    {item.badge === "dot" ? (
                        <span className="ui-tabbar__badgeDot" />
                    ) : typeof item.badge === "number" ? (
                        <span className="ui-tabbar__badge">
                      {item.badge > 99 ? "99+" : item.badge}
                    </span>
                    ) : null}
                </span>

                  {showLabels ? (
                      <span className="ui-tabbar__label">{item.label}</span>
                  ) : null}
              </span>
                        </button>
                    );

                    const defaultOnClick = () => {
                        if (item.disabled) return;
                        item.onPress?.();
                        onChange?.(item.key);
                    };

                    if (renderItem) {
                        return (
                            <React.Fragment key={item.key}>
                                {renderItem({ item, active, content, defaultOnClick })}
                            </React.Fragment>
                        );
                    }

                    return <React.Fragment key={item.key}>{content}</React.Fragment>;
                })}
            </div>
        </nav>
    );
}
