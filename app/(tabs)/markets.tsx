import { View, Text, StyleSheet } from 'react-native';

const MarketsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Рынки</Text>
            {/* Додайте тут ваш компонент для відображення ринків */}
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

export default MarketsScreen;