import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';

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
              <View style={styles.notificationDot} />
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
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
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
    fontSize: 16,
    color: '#000',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  notificationIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00C853',
  },
});