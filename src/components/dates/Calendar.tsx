import React from "react";
import { Button } from "../button/Button";


const DOW = ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

function startOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function endOfMonth(d: Date) { return new Date(d.getFullYear(), d.getMonth() + 1, 0); }
function addMonths(d: Date, n: number) { return new Date(d.getFullYear(), d.getMonth() + n, 1); }
function sameDay(a?: Date, b?: Date) {
  if (!a || !b) return false;
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function toKey(d: Date) { return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; }

export function Calendar(props: {
  value?: Date;
  onChange: (d: Date) => void;
  month?: Date;
  onMonthChange?: (d: Date) => void;
}) {
  const controlledMonth = props.month;
  const [innerMonth, setInnerMonth] = React.useState<Date>(() => startOfMonth(props.value ?? new Date()));
  const month = controlledMonth ?? innerMonth;

  const setMonth = (d: Date) => {
    props.onMonthChange?.(d);
    if (!controlledMonth) setInnerMonth(d);
  };

  const start = startOfMonth(month);
  const end = endOfMonth(month);

  const jsDow = start.getDay();
  const shift = (jsDow + 6) % 7;

  const days: { date: Date; muted: boolean }[] = [];
  const prevMonthEnd = new Date(start.getFullYear(), start.getMonth(), 0);
  for (let i = 0; i < shift; i++) {
    const d = new Date(prevMonthEnd.getFullYear(), prevMonthEnd.getMonth(), prevMonthEnd.getDate() - (shift - 1 - i));
    days.push({ date: d, muted: true });
  }
  for (let day = 1; day <= end.getDate(); day++) {
    days.push({ date: new Date(start.getFullYear(), start.getMonth(), day), muted: false });
  }
  while (days.length % 7 !== 0) {
    const last = days[days.length - 1].date;
    const d = new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1);
    days.push({ date: d, muted: true });
  }

  const title = month.toLocaleString("ru-RU", { month: "long", year: "numeric" });

  return (
    <div className="ui-cal">
      <div className="ui-cal__head">
        <Button variant="ghost" tone="neutral" size="sm" onClick={() => setMonth(addMonths(month, -1))}>
          ←
        </Button>
        <div className="ui-cal__title">{title}</div>
        <Button variant="ghost" tone="neutral" size="sm" onClick={() => setMonth(addMonths(month, 1))}>
          →
        </Button>
      </div>

      <div className="ui-cal__grid">
        {DOW.map((d) => <div key={d} className="ui-cal__dow">{d}</div>)}
        {days.map(({ date, muted }) => (
          <button
            key={toKey(date)}
            type="button"
            className="ui-cal__day"
            data-muted={muted ? "true" : "false"}
            data-selected={sameDay(date, props.value) ? "true" : "false"}
            onClick={() => props.onChange(date)}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}
