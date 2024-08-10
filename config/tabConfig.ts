import React from "react";

interface TabConfigItem {
    name: string;
    label: string;
    icon: React.ComponentType<{ focused: boolean }>;
}

const tabConfig: TabConfigItem[] = [
    {
        name: "index",
        label: "Главная",
        icon: require('@/assets/icons/main-ico').default,
    },
    {
        name: "markets",
        label: "Рынки",
        icon: require('@/assets/icons/markets-ico').default,
    },
    {
        name: "conversion",
        label: "Конвертация",
        icon: require('@/assets/icons/conversion-ico').default,
    },
    {
        name: "p2p",
        label: "P2P",
        icon: require('@/assets/icons/p2p-ico').default,
    },
];

export default tabConfig;
export type { TabConfigItem };