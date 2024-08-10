import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AssetsHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Активы</Text>
      <View style={styles.iconsContainer}>
        <Icon name="grid-view" size={24} color="#9CA3AF" style={styles.icon} />
        <Icon name="view-list" size={24} color="#9CA3AF" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 16,
  },
});

export default AssetsHeader;