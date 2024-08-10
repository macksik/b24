import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type TransactionItemProps = {
  text: string;
  image: ImageSourcePropType;
  date: string;
  amount: string;
  status: string;
};

const TransactionItem: React.FC<TransactionItemProps> = ({ text, image, date, amount, status }) => {
  return (
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.status}>{status}</Text>
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
  image: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
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
  status: {
    fontSize: 12,
    color: '#888',
  },
});

export default TransactionItem;