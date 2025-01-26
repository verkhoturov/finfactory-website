import React from 'react';
import { Heading } from '@/shared/ui/Heading';
import { Layout } from '@/shared/ui/Layout';

import styles from './Profit.module.css';

export const Profit = () => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <Heading.H2>Выгоды для покупателя:</Heading.H2>

                        <ul>
                            <li>
                                Дополнительный доход от размещения свободной ликвидности в ранние
                                оплаты
                            </li>
                            <li>
                                Возможность переключения между собственным и банковским
                                финансированием
                            </li>
                            <li>Повышение лояльности поставщиков</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <Heading.H2>Выгоды для поставщика:</Heading.H2>
                        <ul>
                            <li>Возможность оперативного привлечения денежных средств</li>
                            <li>Ускорение оборачиваемости дебиторской задолженности</li>
                            <li>Улучшение взаимоотношений с Покупателем</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout.Container>
    );
};
