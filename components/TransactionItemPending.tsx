import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TransactionItemPendingProps {
  text: string;
  image: any;
  date: string;
  amount: string;
  status: string;
}

const TransactionItemPending: React.FC<TransactionItemPendingProps> = ({ text, image, date, amount, status }) => {
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
          <Icon name="hourglass-empty" size={16} color="#9CA3AF" />
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
      // Removed borderBottomWidth and borderBottomColor to match TransactionItemSuccess
    },
    iconContainer: {
      width: 24, // Changed from 40 to 24
      height: 24, // Changed from 40 to 24
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', // Changed from '#F3F4F6' to '#fff'
      borderRadius: 8, // Changed from 20 to 8
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
      color: '#000', // Changed from '#111827' to '#000'
    },
    date: {
      fontSize: 12, // Changed from 14 to 12
      color: '#888', // Changed from '#6B7280' to '#888'
      marginTop: 4,
    },
    amountContainer: {
      alignItems: 'flex-end',
    },
    amount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green', // Changed from '#10B981' to 'green'
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 4, // Added to match TransactionItemSuccess
    },
    status: {
      fontSize: 12, // Changed from 14 to 12
      color: '#888', // Changed from '#9CA3AF' to '#888'
      marginLeft: 4,
    },
  });
export default TransactionItemPending;