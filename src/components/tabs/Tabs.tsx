import * as RadixTabs from "@radix-ui/react-tabs";
// import "./tabs.css";


export const Tabs = RadixTabs.Root;

export function TabsList(props: RadixTabs.TabsListProps) {
    return <RadixTabs.List className="ui-tabs__list" {...props} />;
}

export function TabsTrigger(props: RadixTabs.TabsTriggerProps) {
    return <RadixTabs.Trigger className="ui-tabs__trigger" {...props} />;
}

export const TabsContent = RadixTabs.Content;
