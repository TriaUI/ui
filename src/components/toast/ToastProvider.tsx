import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { Button } from "../button/Button";
// import "./toast.css";


export type ToastVariant = "default" | "success" | "error";

export type ToastInput = {
    title: string;
    description?: string;
    variant?: ToastVariant;
    durationMs?: number;
    action?: { label: string; onClick: () => void };
};

type ToastItem = ToastInput & { id: string; open: boolean };

type ToastCtx = {
    toast: (t: ToastInput) => string;
    dismiss: (id: string) => void;
    dismissAll: () => void;
};

const Ctx = createContext<ToastCtx | null>(null);

function uid() {
    return Math.random().toString(16).slice(2) + Date.now().toString(16);
}

export function ToastProvider({ children }: React.PropsWithChildren) {
    const [items, setItems] = useState<ToastItem[]>([]);

    const toast = useCallback((input: ToastInput) => {
        const id = uid();
        const item: ToastItem = { id, open: true, ...input };
        setItems((prev) => [item, ...prev].slice(0, 5));
        return id;
    }, []);

    const dismiss = useCallback((id: string) => {
        setItems((prev) => prev.map((t) => (t.id === id ? { ...t, open: false } : t)));
    }, []);

    const dismissAll = useCallback(() => {
        setItems((prev) => prev.map((t) => ({ ...t, open: false })));
    }, []);

    const value = useMemo(() => ({ toast, dismiss, dismissAll }), [toast, dismiss, dismissAll]);

    return (
        <Ctx.Provider value={value}>
            <RadixToast.Provider swipeDirection="right">
                {children}

                {items.map((t) => (
                    <RadixToast.Root
                        key={t.id}
                        className="ui-toast"
                        data-variant={t.variant ?? "default"}
                        open={t.open}
                        duration={t.durationMs ?? 3200}
                        onOpenChange={(open) => {
                            if (!open) {
                                setItems((prev) => prev.filter((x) => x.id !== t.id));
                            }
                        }}
                    >
                        <div className="ui-toast__row">
                            <div>
                                <RadixToast.Title className="ui-toast__title">{t.title}</RadixToast.Title>
                                {t.description ? <RadixToast.Description className="ui-toast__desc">{t.description}</RadixToast.Description> : null}
                            </div>

                            <div style={{ display: "flex", gap: 8 }}>
                                {t.action ? (
                                    <Button
                                        variant="ghost"
                                        tone="neutral"
                                        size="sm"
                                        onClick={() => {
                                            t.action?.onClick();
                                            dismiss(t.id);
                                        }}
                                    >
                                        {t.action.label}
                                    </Button>
                                ) : null}

                                <RadixToast.Close asChild>
                                    <Button variant="ghost" tone="neutral" size="sm" onClick={() => dismiss(t.id)}>
                                        Закрыть
                                    </Button>
                                </RadixToast.Close>
                            </div>
                        </div>
                    </RadixToast.Root>
                ))}

                <RadixToast.Viewport className="ui-toast__viewport" />
            </RadixToast.Provider>
        </Ctx.Provider>
    );
}

export function useToast(): ToastCtx {
    const v = useContext(Ctx);
    if (!v) throw new Error("useToast must be used within <ToastProvider />");
    return v;
}
