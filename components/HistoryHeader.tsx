import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HistoryHeader = () => {
  return (
    <View style={styles.historyHeader}>
      <TouchableOpacity>
        <Text style={styles.historyText}>Вся история →</Text>
      </TouchableOpacity>
      <Text style={styles.todayText}>Сегодня</Text>
      <Icon name="filter-list" size={24} color="#B0B0B0" />
    </View>
  );
};

const styles = StyleSheet.create({
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  historyText: {
    fontSize: 14,
    color: '#000',
  },
  todayText: {
    fontSize: 14,
    color: '#B0B0B0',
    marginRight: 90,
  },
});

export default HistoryHeader;