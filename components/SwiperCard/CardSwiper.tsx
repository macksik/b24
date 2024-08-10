import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const cardData = [
    {
        currency: 'Bitcoin',
        amount: '0,432 BTC',
        usdAmount: '$15,499.99',
        percentageChange: '+4.80%',
        walletAddress: '1A1zP1eP...7DivfNa',
        backgroundColor: '#F3D2A0',
        icon: require('@/assets/images/bitcoin.png'),
    },
    {
        currency: 'Ethereum',
        amount: '1.2 ETH',
        usdAmount: '$3,500.00',
        percentageChange: '+2.75%',
        walletAddress: '0x12B5e4...4E9aD56',
        backgroundColor: '#D2E0F3',
        icon: require('@/assets/images/bitcoin.png'),
    },
];

const CardSwiper = () => {
    return (
        <View style={styles.wrapper}>
            <Swiper loop={false} showsPagination={true} dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
                {cardData.map((card, index) => (
                    <View key={index} style={[styles.card, { backgroundColor: card.backgroundColor }]}>
                        <Image source={card.icon} style={styles.icon} />
                        <Text style={styles.currency}>{card.currency}</Text>
                        <Text style={styles.amount}>{card.amount}</Text>
                        <Text style={styles.usdAmount}>{card.usdAmount}</Text>
                        <Text style={styles.percentageChange}>{card.percentageChange}</Text>
                        <Text style={styles.walletAddress}>{card.walletAddress}</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Купить</Text>
                            </View>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Продать</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 200, // Adjust according to your needs
    },
    card: {
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    currency: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    amount: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5,
    },
    usdAmount: {
        fontSize: 16,
        color: '#666',
    },
    percentageChange: {
        fontSize: 14,
        color: '#4CAF50',
        marginTop: 5,
    },
    walletAddress: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    button: {
        flex: 1,
        padding: 10,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    buttonText: {
        color: 'green',
        fontWeight: 'bold',
    },
    dot: {
        backgroundColor: '#999',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#4CAF50',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
});

export default CardSwiper;