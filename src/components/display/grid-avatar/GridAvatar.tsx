import React from "react";
import clsx from "clsx";
import { Avatar, type AvatarSize } from "../avatar/Avatar";
// import "./grid-avatar.css";


export type GridAvatarItem = {
  id: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  src?: string;
  initials?: string;
};

export function GridAvatar(props: {
  items: GridAvatarItem[];
  cols?: 2 | 3 | 4;
  size?: AvatarSize;
  className?: string;
}) {
  const { items, cols = 2, size = 32, className } = props;
  return (
    <div className={clsx("ui-gridavatar", className)} data-cols={String(cols)}>
      {items.map((it) => (
        <div key={it.id} className="ui-gridavatar__cell">
          <Avatar size={size} src={it.src} initials={it.initials} />
          <div className="ui-gridavatar__label">
            <div className="ui-gridavatar__title">{it.title}</div>
            {it.subtitle ? <div className="ui-gridavatar__subtitle">{it.subtitle}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
