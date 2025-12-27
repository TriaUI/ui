import React from "react";
import { Button } from "../button/Button";
// import "./calendar.css";


const DOW = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function endOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth() + 1, 0); }
function addMonths(d: Date, n: number) { return new Date(d.getFullYear(), d.getMonth() + n, 1); }
function toKey(d: Date) { return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; }
function inRange(d: Date, a?: Date, b?: Date) {
  if (!a || !b) return false;
  const t = d.setHours(0,0,0,0);
  const ta = a.getTime();
  const tb = b.getTime();
  return t >= Math.min(ta, tb) && t <= Math.max(ta, tb);
}
function sameDay(a?: Date, b?: Date) {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function CalendarRange(props: {
  value?: { start?: Date; end?: Date };
  onChange: (v: { start?: Date; end?: Date }) => void;
}) {
  const [month, setMonth] = React.useState<Date>(() => startOfMonth(props.value?.start ?? new Date()));
  const start = props.value?.start;
  const end = props.value?.end;

  const startM = startOfMonth(month);
  const endM = endOfMonth(month);

  const jsDow = startM.getDay();
  const shift = (jsDow + 6) % 7;

  const days: { date: Date; muted: boolean }[] = [];
  const prevMonthEnd = new Date(startM.getFullYear(), startM.getMonth(), 0);
  for (let i = 0; i < shift; i++) {
    const d = new Date(prevMonthEnd.getFullYear(), prevMonthEnd.getMonth(), prevMonthEnd.getDate() - (shift - 1 - i));
    days.push({ date: d, muted: true });
  }
  for (let day = 1; day <= endM.getDate(); day++) {
    days.push({ date: new Date(startM.getFullYear(), startM.getMonth(), day), muted: false });
  }
  while (days.length % 7 !== 0) {
    const last = days[days.length - 1].date;
    const d = new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1);
    days.push({ date: d, muted: true });
  }

  const title = month.toLocaleString("ru-RU", { month: "long", year: "numeric" });

  const clickDay = (d: Date) => {
    if (!start || (start && end)) {
      props.onChange({ start: d, end: undefined });
      return;
    }
    props.onChange({ start, end: d });
  };

  return (
    <div className="ui-cal">
      <div className="ui-cal__head">
        <Button variant="ghost" tone="neutral" size="sm" onClick={() => setMonth(addMonths(month, -1))}>←</Button>
        <div className="ui-cal__title">{title}</div>
        <Button variant="ghost" tone="neutral" size="sm" onClick={() => setMonth(addMonths(month, 1))}>→</Button>
      </div>

      <div style={{ display: "flex", gap: 10, color: "var(--ui-muted)", fontSize: 12, marginBottom: 8 }}>
        <div>От: {start ? start.toLocaleDateString("ru-RU") : "—"}</div>
        <div>До: {end ? end.toLocaleDateString("ru-RU") : "—"}</div>
      </div>

      <div className="ui-cal__grid">
        {DOW.map((d) => <div key={d} className="ui-cal__dow">{d}</div>)}
        {days.map(({ date, muted }) => {
          const selected = sameDay(date, start) || sameDay(date, end);
          const range = inRange(new Date(date.getFullYear(), date.getMonth(), date.getDate()), start, end);
          return (
            <button
              key={toKey(date)}
              type="button"
              className="ui-cal__day"
              data-muted={muted ? "true" : "false"}
              data-selected={selected ? "true" : "false"}
              data-range={range && !selected ? "true" : "false"}
              onClick={() => clickDay(date)}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
