import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransactionItemSuccess = ({ text, image, date, amount, status }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={image} style={styles.icon} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
        <View style={styles.statusContainer}>
          <Icon name="check-circle-outline" size={16} color="#4CAF50" />
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: 12,
    color: '#888',
    marginLeft: 4,
  },
});

export default TransactionItemSuccess;