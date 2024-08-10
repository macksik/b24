import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text,  StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import transactions, { Transaction } from '@/data/transactions';
import { TransactionItem, TransactionItemPending, TransactionItemError, TransactionItemSuccess } from '@/components/TransactionItems';
import HistoryHeader from "@/components/HistoryHeader";
import AssetsHeader from '@/components/AssetsHeader';
import CardSwiper from "@/components/SwiperCard/CardSwiper";
import Animated, { useAnimatedStyle, useSharedValue, interpolate, withTiming } from 'react-native-reanimated';
import { cardData } from '@/data/cards';

const HomeScreen = () => {

  const bottomSheetRef = useRef<BottomSheet>(null);
  const animatedBackground = useSharedValue(0);
  const animatedTextPosition = useSharedValue(0);

  const [activeBackgroundColor, setActiveBackgroundColor] = useState(cardData[0].backgroundColor);
  const [displayedBackgroundColor, setDisplayedBackgroundColor] = useState('#FFFFFF');
  const [activeCard, setActiveCard] = useState(0);

  const updateColors = useCallback((color: string) => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(color, true);
    }
    StatusBar.setBarStyle('dark-content', true);
    setDisplayedBackgroundColor(color);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 2) {
      updateColors(activeBackgroundColor);

      animatedBackground.value = withTiming(1, { duration: 300 });
      animatedTextPosition.value = withTiming(1, { duration: 300 });
    } else {
      updateColors('#FFFFFF');

      animatedBackground.value = withTiming(0, { duration: 300 });
      animatedTextPosition.value = withTiming(0, { duration: 300 });
    }
  }, [animatedBackground, animatedTextPosition, activeBackgroundColor, updateColors]);

  const handleSwiperIndexChanged = (index: number) => {
    setActiveCard(index);
    setActiveBackgroundColor(cardData[index].backgroundColor);
  };

  const textStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
        animatedTextPosition.value,
        [0, 1],
        [-20, 0] // Adjust translateY values based on your layout
    );
    const opacity = interpolate(
        animatedTextPosition.value,
        [0, 1],
        [0, 1]
    );
    return {
      transform: [{ translateY }],
      opacity,
    };
  });

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
        <StatusBar barStyle="dark-content" backgroundColor={displayedBackgroundColor} />
        <SafeAreaView style={[styles.safeArea, { backgroundColor: displayedBackgroundColor }]}>
          <Animated.View style={styles.container}>
            <Animated.View style={[styles.headerDynamic, textStyle, { backgroundColor: displayedBackgroundColor }]}>
              <Text style={styles.cardTitle}>{cardData[activeCard].currency}: {cardData[activeCard].amount}</Text>
            </Animated.View>
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
            <AssetsHeader />
            <CardSwiper onIndexChanged={handleSwiperIndexChanged} />
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
                snapPoints={['25%', '54%', '93%']}
                onChange={handleSheetChanges}
            >
              <BottomSheetView style={styles.contentContainer}>
                <HistoryHeader />
                {transactions.map((transaction, index) => renderTransactionItem(transaction, index))}
                <Text style={styles.yesterdayText}>Вчера</Text>
                {transactions.map((transaction, index) => renderTransactionItem(transaction, index))}
              </BottomSheetView>
            </BottomSheet>
          </Animated.View>
        </SafeAreaView>
      </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    backgroundColor: '#FFFFFF',
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
    top: 0,
    zIndex: 1,
  },
  headerDynamic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 7,
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: '100%',
    height: '7%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
    marginTop: '5%',
  },
  iconItem: {
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    backgroundColor: '#147C68',
    borderRadius: 50,
    padding: 7,
  },
  iconText: {
    marginTop: 5,
    color: '#147C68',
    fontSize: 14,
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 150 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
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