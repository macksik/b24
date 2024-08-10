import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Додайте цей імпорт
import TransactionItem from '@/components/TransactiItem';
import HistoryHeader from '@/components/HistoryHeader';
import TransactionItemError from '@/components/TransactionItemError';
import TransactionItemSuccess from '@/components/TransactionItemSuccess';
import TransactionItemPending from '@/components/TransactionItemPending';

export default function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
                source={require('@/assets/images/image.png')}
                style={styles.profileImage}
            />
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceText}>Общий баланс</Text>
              <Text style={styles.balanceAmount}>≈$15,499.99</Text>
            </View>
            <View style={styles.notificationIcon}>
                <Image
                    source={require('@/assets/images/bell.png')}
                    style={styles.notificationIconImage}
                />
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
            style={styles.bottomSheet} // Add this line
            ref={bottomSheetRef}
            index={0} // Set the initial index
            snapPoints={['25%', '55%', '85%']} // Define snap points
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={styles.contentContainer} contentContainerStyle={styles.scrollContentContainer}>
              <HistoryHeader /> 
              <TransactionItem
                text="Покупка"
                image={require('@/assets/images/export.png')}
                date="09 Июня 2024, 00:00"
                amount="0,432 BTC"
                status="Получено"
              />
              <Text style={styles.yesterdayText}>Вчора</Text>
              <TransactionItemPending
                  text="Покупка"
                  image={require('@/assets/images/export.png')}
                  date="09 Июня 2024, 00:00"
                  amount="0,432 BTC"
                  status="В ожидании"
                />
                <TransactionItemError 
                text="Обмен"
                image={require('@/assets/images/repeat.png')}
                date="09 Июня 2024, 00:00"
                amount="0,432 ETH → 0,432 BTC"
                status="Ошибка"
              />
              <TransactionItemSuccess
                text="Продажа"
                image={require('@/assets/images/sell.png')}
                date="09 Июня 2024, 00:00"
                amount="0.432 BTC"
                status="Получено"
              />
              <Text style={styles.yesterdayText}>09 Июня 2024</Text>
              <TransactionItem
                text="Покупка"
                image={require('@/assets/images/export.png')}
                date="09 Июня 2024, 00:00"
                amount="0,432 BTC"
                status="Получено"
              />
              <TransactionItem
                text="Покупка"
                image={require('@/assets/images/export.png')}
                date="09 Июня 2024, 00:00"
                amount="0,432 BTC"
                status="Получено"
              />
              <TransactionItem
                text="Покупка"
                image={require('@/assets/images/export.png')}
                date="09 Июня 2024, 00:00"
                amount="0,432 BTC"
                status="Получено"
              />
            </BottomSheetView>
          </BottomSheet>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

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
    position: 'absolute', // Add this line to position the dot correctly
    top: 2, // Adjust as needed
    right: 2, // Adjust as needed
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
    padding: 160,
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
    position: 'relative', // Add this line to position the dot correctly
  },
});