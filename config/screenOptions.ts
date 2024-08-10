import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StyleSheet, TextStyle } from 'react-native';

interface CustomScreenOptions extends BottomTabNavigationOptions {
    tabBarLabelStyle: TextStyle;
}

const screenOptions: CustomScreenOptions = {
    tabBarLabelStyle: StyleSheet.create({
        label: {
            textAlign: 'center',
            fontFamily: 'Arial',
            fontSize: 10,
            fontStyle: 'normal' as 'normal',
            fontWeight: '400' as '400',
            lineHeight: 14,
        }
    }).label,
    tabBarActiveTintColor: '#070707',
    tabBarInactiveTintColor: '#9CA3AF',
    tabBarStyle: {
        backgroundColor: '#FFFFFF',
    },
};

export default screenOptions;