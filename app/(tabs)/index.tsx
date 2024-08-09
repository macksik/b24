import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function HomeScreen() {
  return (
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
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1, // додано бордер ботом
    borderBottomColor: '#ccc', // колір бордера
  },
  container: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00C853',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    padding: 10,
  },
  iconText: {
    marginTop: 5,
    color: '#4CAF50',
    fontSize: 14,
  },
});