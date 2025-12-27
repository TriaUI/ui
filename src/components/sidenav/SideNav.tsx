import React from "react";
import clsx from "clsx";
// import "./sidenav.css";


export type SideNavItem = {
  key: string;
  label: string;
  href?: string;
  onPress?: () => void;
};

export type SideNavSection = {
  title: React.ReactNode;
  items: SideNavItem[];
};

export function SideNav(props: {
  sections: SideNavSection[];
  activeKey?: string;
  className?: string;
  renderItem?: (args: { item: SideNavItem; active: boolean; content: React.ReactNode }) => React.ReactNode;
}) {
  const { sections, activeKey, className, renderItem } = props;

  return (
    <nav className={clsx("ui-sidenav", className)} aria-label="Sidebar navigation">
      {sections.map((s) => (
        <div className="ui-sidenav__section" key={String(s.title)}>
          <div className="ui-sidenav__title">{s.title}</div>
          <div>
            {s.items.map((it) => {
              const active = activeKey === it.key;
              const content = it.href ? (
                <a className="ui-sidenav__item" data-active={active ? "true" : "false"} href={it.href} onClick={(e) => {
                  if (!it.onPress) return;
                  e.preventDefault();
                  it.onPress();
                }}>
                  {it.label}
                </a>
              ) : (
                <button
                  type="button"
                  className="ui-sidenav__item"
                  data-active={active ? "true" : "false"}
                  style={{ width: "100%", textAlign: "left", border: 0, background: "transparent", cursor: "pointer" }}
                  onClick={it.onPress}
                >
                  {it.label}
                </button>
              );

              return renderItem ? (
                <React.Fragment key={it.key}>{renderItem({ item: it, active, content })}</React.Fragment>
              ) : (
                <React.Fragment key={it.key}>{content}</React.Fragment>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
