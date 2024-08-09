import { View, Text, StyleSheet } from 'react-native';

const P2PScreen = () => {
    return (
        <View style={styles.container}>
            <Text>P2P</Text>
            {/* Додайте тут ваш компонент для P2P */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default P2PScreen;