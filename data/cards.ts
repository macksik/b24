import { ImageSourcePropType } from 'react-native';

export interface CardData {
    currency: string;
    amount: string;
    usdAmount: string;
    percentageChange: string;
    walletAddress: string;
    backgroundColor: string;
    icon: ImageSourcePropType;
}

export const cardData: CardData[] = [
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