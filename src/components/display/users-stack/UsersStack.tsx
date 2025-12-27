import React from "react";
import clsx from "clsx";
import { Avatar, type AvatarSize } from "../avatar/Avatar";
// import "./users-stack.css";


export type UsersStackUser = {
  id: string;
  src?: string;
  initials?: string;
  alt?: string;
};

export type UsersStackProps = {
  users: UsersStackUser[];
  size?: AvatarSize;
  maxVisible?: number;
  className?: string;
};

export function UsersStack({ users, size = 32, maxVisible = 3, className }: UsersStackProps) {
  const visible = users.slice(0, maxVisible);
  const rest = Math.max(0, users.length - visible.length);

  return (
    <div className={clsx("ui-usersstack", className)}>
      {visible.map((u) => (
        <span key={u.id} className="ui-usersstack__item">
          <Avatar size={size} src={u.src} alt={u.alt} initials={u.initials} />
        </span>
      ))}
      {rest > 0 ? <span className="ui-usersstack__more">+{rest}</span> : null}
    </div>
  );
}
