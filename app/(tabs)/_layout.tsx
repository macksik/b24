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
        }}
      />
      <Tabs.Screen
        name="markets"
        options={{
          tabBarLabel: 'Рынки',
          tabBarIcon: () => <TabBarIcon name="line-chart" />,
        }}
      />
      <Tabs.Screen
        name="conversion"
        options={{
          tabBarLabel: 'Конвертация',
          tabBarIcon: () => <TabBarIcon name="exchange" />,
        }}
      />
      <Tabs.Screen
        name="p2p"
        options={{
          tabBarLabel: 'P2P',
          tabBarIcon: () => <TabBarIcon name="sync" />,
        }}
      />
    </Tabs>
  );


import { MaterialIcons } from '@expo/vector-icons';

function TabBarIcon(props: { name: string }) {
  return <MaterialIcons {...props} size={24} color="gray" />; // Using MaterialIcons from the library
}