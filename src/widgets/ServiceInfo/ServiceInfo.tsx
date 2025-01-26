import React from 'react';
import { useRouter } from 'next/navigation';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { Button } from '@/shared/ui/Button';

import styles from './ServiceInfo.module.css';

const tabs: Record<string, React.ReactNode> = {
    'dynamic-discounting': (
        <>
            Динамическое дисконтирование - <br />
            это инструмент ранней оплаты поставщику со скидкой
        </>
    ),
    'factor-broker': (
        <>
            Биржа факторинга - <br />
            lorem ipsum dolor sit amet, consectetur adipiscing elit
        </>
    ),
    'auction-discounting': (
        <>
            Аукцион дисконтирования - <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </>
    ),
    'buyers-financing': (
        <>
            Финансирование покупателей - <br />
            Ut enim ad minim veniam
        </>
    ),
    'digital-doubloon-supply-chain': (
        <>
            Цифровой двойник цепочки поставок - <br />
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </>
    ),
    'verification': (
        <>
            Верификаци - <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </>
    ),
};

export const ServiceInfo = () => {
    const router = useRouter();
    const {
        query: { tab },
    } = router;

    const activeTab = tab || 'dynamic-discounting';

    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>{tabs[activeTab as string]}</Heading.H2>

                <div className={styles.info}>
                    <div className={styles.infoTop}>
                        <Heading.H2>Как это работает?</Heading.H2>

                        <p>
                            Покупатель предоставляет поставщикам возможность получения ранней оплаты
                            до истечения срока оплаты по договору из собственной избыточной
                            ликвидности
                            <br />
                            <br />
                            Поставщик выбирает осуществленные поставки или исполненные работы для
                            ранней оплаты. Система рассчитывает ставку дисконтирования исходя из
                            предустановленных покупателем правил.
                        </p>
                    </div>
                    <div className={styles.infoBottom}>
                        <Heading.H2>Условия и требования</Heading.H2>

                        <p>
                            Покупатель предоставляет поставщикам возможность получения ранней оплаты
                            до истечения срока оплаты по договору из собственной избыточной
                            ликвидности
                            <br />
                            <br />
                            Поставщик выбирает осуществленные поставки или исполненные работы для
                            ранней оплаты. Система рассчитывает ставку дисконтирования исходя из
                            предустановленных покупателем правил. работы для ранней оплаты. Система
                            рассчитывает ставку дисконтирования исходя из предустановленных
                            покупателем правил.работы для ранней оплаты. Система рассчитывает ставку
                            дисконтирования исходя из предустановленных покупателем правил.
                        </p>
                        <br />
                        <br />

                        <Button>Подключиться к платформе</Button>
                    </div>
                </div>
            </div>
        </Layout.Container>
    );
};
