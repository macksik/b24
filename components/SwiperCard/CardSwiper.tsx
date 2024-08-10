import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { cardData } from '@/data/cards';

type CardSwiperProps = {
    onIndexChanged: (index: number) => void;
};

const CardSwiper: React.FC<CardSwiperProps> = ({ onIndexChanged }) => {
    return (
        <View style={styles.wrapper}>
            <Swiper
                loop={false}
                showsPagination={true}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                onIndexChanged={onIndexChanged}
            >
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
        height: 300,
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