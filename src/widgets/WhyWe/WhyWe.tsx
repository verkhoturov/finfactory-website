import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { SimpleCard } from '@/shared/ui/SimpleCard';

import styles from './WhyWe.module.css';
import oneImg from './img/1.jpg';
import twoImg from './img/2.jpg';
import threeImg from './img/3.jpg';

export const WhyWe = () => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>Почему именно мы</Heading.H2>

                <div className={styles.row}>
                    <SimpleCard
                        image={oneImg}
                        desc={`Финансовые продукты
                                кастомизированы под ваш
                                бизнес`}
                    />
                    <SimpleCard
                        image={twoImg}
                        desc={`Эксперты и аналитики
                                сопровождают и консультируют
                                вас на каждом этапе`}
                    />

                    <SimpleCard
                        image={threeImg}
                        desc={`Банки конкурируют
                                друг с другом и предлагают
                                лучшие решения`}
                    />
                </div>
            </div>
        </Layout.Container>
    );
};
