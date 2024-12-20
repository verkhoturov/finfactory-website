import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { Tabs } from '@/shared/ui/Tabs';

import styles from './Products.module.css';

import calcImg from './img/calc.svg';
import cashImg from './img/cash.svg';
import chartImg from './img/chart.svg';
import coinsImg from './img/coins.svg';
import contentImg from './img/content.svg';
import monitorImg from './img/monitor.svg';

const ProductsRow = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.row}>{children}</div>;
};

const ProductCard = ({ text, icon }: { text: string; icon?: string }) => {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${icon})` }}>
            <span>{text}</span>
        </div>
    );
};

const holdings = [
    { text: 'Динамическое дисконтирование', icon: calcImg.src as string },
    { text: 'Аукцион дисконтирования', icon: monitorImg.src as string },
    { text: 'Система гибких расчетных дат', icon: chartImg.src as string },
    { text: 'Финансирование покупателей', icon: contentImg.src as string },
    { text: 'Биржа факторинга', icon: coinsImg.src as string },
    { text: 'Верификация', icon: cashImg.src as string },
];

const tabsData = [
    {
        value: '1',
        title: 'Корпорации и холдинги',
        content: (
            <ProductsRow>
                {holdings.map((item, index) => (
                    <ProductCard key={index} text={item.text} icon={item.icon} />
                ))}
            </ProductsRow>
        ),
    },
    {
        value: '2',
        title: 'Компании и Предприятия',
        content: <>-</>,
        disabled: true,
    },
    {
        value: '3',
        title: 'Финансовым Институтам',
        content: <>-</>,
        disabled: true,
    },
    {
        value: '4',
        title: 'Агентам',
        content: <>-</>,
        disabled: true,
    },
];

export const Products = () => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>Продукты FINFACTORY</Heading.H2>

                <Tabs data={tabsData} />
            </div>
        </Layout.Container>
    );
};
