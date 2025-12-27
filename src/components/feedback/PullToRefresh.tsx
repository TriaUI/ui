import React from "react";
// import "./pull.css";


export function PullToRefresh(props: React.PropsWithChildren<{
  onRefresh: () => Promise<void> | void;
  thresholdPx?: number;
  labelPull?: string;
  labelRelease?: string;
  labelLoading?: string;
  className?: string;
  style?: React.CSSProperties;
}>) {
  const {
    children,
    onRefresh,
    thresholdPx = 70,
    labelPull = "Потяните вниз",
    labelRelease = "Отпустите для обновления",
    labelLoading = "Обновление...",
    className,
    style
  } = props;

  const ref = React.useRef<HTMLDivElement | null>(null);
  const [pull, setPull] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const startY = React.useRef<number | null>(null);
  const active = React.useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    if (loading) return;
    const el = ref.current;
    if (!el) return;
    if (el.scrollTop > 0) return;
    active.current = true;
    startY.current = e.clientY;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!active.current || loading) return;
    const el = ref.current;
    if (!el) return;
    if (el.scrollTop > 0) return;

    const dy = e.clientY - (startY.current ?? e.clientY);
    if (dy <= 0) {
      setPull(0);
      return;
    }

    // демпфирование
    const damp = Math.min(140, dy * 0.6);
    setPull(damp);
  };

  const end = async () => {
    if (!active.current) return;
    active.current = false;

    if (pull >= thresholdPx && !loading) {
      setLoading(true);
      setPull(thresholdPx);
      try {
        await onRefresh();
      } finally {
        setLoading(false);
        setPull(0);
      }
    } else {
      setPull(0);
    }
  };

  return (
    <div
      ref={ref}
      className={className ? `ui-pull ${className}` : "ui-pull"}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerCancel={end}
    >
      <div className="ui-pull__indicator" style={{ height: pull }}>
        <div className="ui-pull__pill">
          {loading ? labelLoading : pull >= thresholdPx ? labelRelease : labelPull}
        </div>
      </div>

      <div style={{ paddingTop: pull }}>{children}</div>
    </div>
  );
}
