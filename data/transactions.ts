export interface Transaction {
    type: 'default' | 'pending' | 'error' | 'success';
    text: string;
    image: any;
    date: string;
    amount: string;
    status: string;
}

const transactions: Transaction[] = [
    {
        type: 'default',
        text: 'Покупка',
        image: require('@/assets/images/export.png'),
        date: '09 Июня 2024, 00:00',
        amount: '0,432 BTC',
        status: 'Получено',
    },
    {
        type: 'pending',
        text: 'Покупка',
        image: require('@/assets/images/export.png'),
        date: '09 Июня 2024, 00:00',
        amount: '0,432 BTC',
        status: 'В ожидании',
    },
    {
        type: 'error',
        text: 'Обмен',
        image: require('@/assets/images/repeat.png'),
        date: '09 Июня 2024, 00:00',
        amount: '0,432 ETH → 0,432 BTC',
        status: 'Ошибка',
    },
    {
        type: 'success',
        text: 'Продажа',
        image: require('@/assets/images/sell.png'),
        date: '09 Июня 2024, 00:00',
        amount: '0.432 BTC',
        status: 'Получено',
    },
    {
        type: 'default',
        text: 'Покупка',
        image: require('@/assets/images/export.png'),
        date: '09 Июня 2024, 00:00',
        amount: '0,432 BTC',
        status: 'Получено',
    },
];

export default transactions;