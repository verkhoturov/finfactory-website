import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { NavCard } from '@/shared/ui/NavCard';
import { Select } from '@/shared/ui/Select';

import styles from './Welcome.module.css';

import holdingsImg from './img/holdings.svg';
import companyImg from './img/company.svg';
import finImg from './img/fin.svg';
import agentsImg from './img/agents.svg';

const homeMenuItems = [
    {
        title: 'Корпорации\nи холдинги',
        href: '/corporations-and-holdings',
        iconUrl: holdingsImg.src,
    },
    {
        title: 'Компании\nи Предприятия',
        href: '/companies-and-enterprises',
        iconUrl: companyImg.src,
    },
    { title: 'Финансовым\nИнститутам', href: '/financial-institutions', iconUrl: finImg.src },
    { title: 'Агентам\n\n', href: '/agents', iconUrl: agentsImg.src },
];

const tabsCommonMenu = [
    {
        title: 'Динамическое дисконтирование',
        tab: 'dynamic-discounting',
    },
    {
        title: 'Биржа факторинга',
        tab: 'factor-broker',
    },
    {
        title: 'Аукцион дисконтирования',
        tab: 'auction-discounting',
    },
    {
        title: 'Финансирование покупателей',
        tab: 'buyers-financing',
    },
    {
        title: 'Цифровой двойник цепочки поставок',
        tab: 'digital-doubloon-supply-chain',
    },
    {
        title: 'Верификация',
        tab: 'verification',
    },
];

const HomePageMenu = () => (
    <ul>
        {homeMenuItems.map(({ title, iconUrl, href }) => (
            <li key={title}>
                <NavCard href={href} iconUrl={iconUrl}>
                    {title}
                </NavCard>
            </li>
        ))}
    </ul>
);

const TabsMenu = ({ activeTab }: { activeTab: string }) => (
    <ul>
        {tabsCommonMenu.map(({ title, tab }) => (
            <li key={title}>
                <NavCard href={`?tab=${tab}`} isActive={activeTab === tab} isSmall scroll={false}>
                    {title}
                </NavCard>
            </li>
        ))}
    </ul>
);

interface WelcomeProps {
    title: string;
    subtitle?: string;
    desc: string;
    isHomePage?: boolean;
    backgroundImage?: string;
    icon?: React.ReactNode;
}

export const Welcome = ({
    title,
    subtitle,
    desc,
    isHomePage,
    backgroundImage,
    icon,
}: WelcomeProps) => {
    const router = useRouter();
    const { query } = router;

    const [activeTab, setActiveTab] = React.useState('dynamic-discounting');

    React.useEffect(() => {
        if (query.tab) {
            setActiveTab(query.tab as string);
        }
    }, [query]);

    return (
        <>
            <section className={styles.wrapper}>
                <div
                    className={styles.bg}
                    style={{
                        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                        backgroundPositionY: isHomePage ? '-20px' : 'bottom',
                    }}
                />
                <Layout.Container tag="div">
                    <div className={styles.inner}>
                        {subtitle && <Heading.H2 color="light">{subtitle}</Heading.H2>}
                        <Heading.H1>{title}</Heading.H1>

                        <div className={styles.descWrapper}>
                            <span className={styles.desc}>{desc}</span>
                        </div>

                        {icon && <div className={styles.icon}>{icon}</div>}
                    </div>
                </Layout.Container>
            </section>

            <section
                className={cn(styles.navigationWrapper, {
                    [styles.home]: isHomePage,
                })}
            >
                <Layout.Container tag="div">
                    <nav
                        className={cn(styles.nav, {
                            [styles.home]: isHomePage,
                        })}
                    >
                        {isHomePage ? <HomePageMenu /> : <TabsMenu activeTab={activeTab} />}
                    </nav>

                    <div
                        className={cn(styles.navSelectWrapper, {
                            [styles.home]: isHomePage,
                        })}
                    >
                        <Select
                            items={tabsCommonMenu.map(({ title, tab }) => ({
                                label: title,
                                value: tab,
                            }))}
                        />
                    </div>
                </Layout.Container>
            </section>
        </>
    );
};
