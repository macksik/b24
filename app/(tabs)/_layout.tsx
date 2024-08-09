import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Importing the icon library

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: () => <TabBarIcon name="home" />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="markets"
        options={{
          tabBarLabel: 'Рынки',
          tabBarIcon: () => <TabBarIcon name="pie-chart" />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="conversion"
        options={{
          tabBarLabel: 'Конвертация',
          tabBarIcon: () => <TabBarIcon name="pie-chart" />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="p2p"
        options={{
          tabBarLabel: 'P2P',
          tabBarIcon: () => <TabBarIcon name="sync" />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}



function TabBarIcon(props: { name: keyof typeof MaterialIcons.glyphMap }) {
  return <MaterialIcons {...props} size={24} color="gray" />; // Using MaterialIcons from the library
}