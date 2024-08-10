import { Tabs } from 'expo-router';
import tabConfig from '@/config/tabConfig';
import screenOptions from '@/config/screenOptions';

const Layout = () => {
    return (
        <Tabs screenOptions={screenOptions}>
            {tabConfig.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        tabBarLabel: tab.label,
                        tabBarIcon: ({ focused }) => {
                            const IconComponent = tab.icon;
                            return <IconComponent focused={focused} />;
                        },
                        headerShown: false,
                    }}
                />
            ))}
        </Tabs>
    );
};

export default Layout;