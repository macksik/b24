import React, { useCallback, useRef } from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import transactions, { Transaction } from '@/data/transactions';
import { TransactionItem, TransactionItemPending, TransactionItemError, TransactionItemSuccess } from '@/components/TransactionItems';
import HistoryHeader from "@/components/HistoryHeader";

const HomeScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderTransactionItem = (transaction: Transaction, index: number) => {
    switch (transaction.type) {
      case 'pending':
        return (
            <TransactionItemPending
                key={index}
                text={transaction.text}
                image={transaction.image}
                date={transaction.date}
                amount={transaction.amount}
                status={transaction.status}
            />
        );
      case 'error':
        return (
            <TransactionItemError
                key={index}
                text={transaction.text}
                image={transaction.image}
                date={transaction.date}
                amount={transaction.amount}
                status={transaction.status}
            />
        );
      case 'success':
        return (
            <TransactionItemSuccess
                key={index}
                text={transaction.text}
                image={transaction.image}
                date={transaction.date}
                amount={transaction.amount}
                status={transaction.status}
            />
        );
      default:
        return (
            <TransactionItem
                key={index}
                text={transaction.text}
                image={transaction.image}
                date={transaction.date}
                amount={transaction.amount}
                status={transaction.status}
            />
        );
    }
  };

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image source={require('@/assets/images/image.png')} style={styles.profileImage} />
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceText}>Общий баланс</Text>
                <Text style={styles.balanceAmount}>≈$15,499.99</Text>
              </View>
              <View style={styles.notificationIcon}>
                <Image source={require('@/assets/images/bell.png')} style={styles.notificationIconImage} />
                <View style={styles.notificationDot} />
              </View>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconItem}>
                <Icon name="arrow-downward" size={30} color="#fff" style={styles.icon} />
                <Text style={styles.iconText}>Депозит</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="arrow-upward" size={30} color="#fff" style={styles.icon} />
                <Text style={styles.iconText}>Вывод</Text>
              </View>
              <View style={styles.iconItem}>
                <Icon name="swap-horiz" size={30} color="#fff" style={styles.icon} />
                <Text style={styles.iconText}>Обменять</Text>
              </View>
            </View>
            <BottomSheet
                style={styles.bottomSheet}
                ref={bottomSheetRef}
                index={0}
                snapPoints={['25%', '55%', '85%']}
                onChange={handleSheetChanges}
            >
              <BottomSheetView style={styles.contentContainer}>
                <HistoryHeader />
                {transactions.map((transaction, index) => renderTransactionItem(transaction, index))}
              </BottomSheetView>
            </BottomSheet>
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  balanceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 14,
    color: '#000',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationIconImage: {
    width: 24,
    height: 24,
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00C853',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '95%',
  },
  iconItem: {
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    padding: 7,
  },
  iconText: {
    marginTop: 5,
    color: '#4CAF50',
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  scrollContentContainer: {
    // padding: 160,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 150 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  yesterdayText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 3,
    marginBottom: 3,
  },
  notificationIcon: {
    position: 'relative',
  },
});

export default HomeScreen;