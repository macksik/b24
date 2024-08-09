import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import MarketsIcon from "@/assets/icons/markets-ico";

const TabBarIcon = (props: { name: keyof typeof MaterialIcons.glyphMap }) => (
    <MaterialIcons {...props} size={24} color="gray" />
);

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Главная',
                    tabBarIcon: () => <TabBarIcon name="home" />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="markets"
                options={{
                    tabBarLabel: 'Рынки',
                    tabBarIcon: ({ focused }) => <MarketsIcon focused={focused} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="conversion"
                options={{
                    tabBarLabel: 'Конвертация',
                    tabBarIcon: () => <TabBarIcon name="pie-chart" />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="p2p"
                options={{
                    tabBarLabel: 'P2P',
                    tabBarIcon: () => <TabBarIcon name="sync" />,
                    headerShown: false,
                }}
            />
        </Tabs>
    );
};

export default Layout;