import { View, Text, StyleSheet } from 'react-native';

const ConversionScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Конвертация</Text>
            {/* Додайте тут ваш компонент для конвертації */}
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

export default ConversionScreen;