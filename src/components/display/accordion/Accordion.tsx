import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import clsx from "clsx";
// import "./accordion.css";


export type AccordionItemData = {
  value: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export function Accordion(props: {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  collapsible?: boolean;
  className?: string;
  chevron?: React.ReactNode;
}) {
  const { items, type = "single", defaultValue, collapsible = true, className, chevron } = props;

  return (
    <RadixAccordion.Root
      className={clsx("ui-acc", className)}
      type={type as any}
      defaultValue={defaultValue as any}
      collapsible={collapsible}
    >
      {items.map((it) => (
        <RadixAccordion.Item key={it.value} className="ui-acc__item" value={it.value}>
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="ui-acc__trigger">
              <span className="ui-acc__title">{it.title}</span>
              <span className="ui-acc__chevron" aria-hidden>
                {chevron ?? "▾"}
              </span>
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="ui-acc__content">{it.content}</RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
