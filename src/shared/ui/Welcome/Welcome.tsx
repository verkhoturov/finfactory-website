'use client';

import React from 'react';
import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { NavCard } from '@/shared/ui/NavCard';
import { Select } from '@/shared/ui/Select';
import type { HomePage as HomePageType, Media } from '@/payload-types';

import styles from './Welcome.module.css';

type NavType = Pick<HomePageType, 'navigation'>;

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

const HomePageMenu = ({ navList }: { navList: NavType }) => {
    const {
        navigation: { link_1, link_2, link_3, link_4 },
    } = navList;
    return (
        <ul>
            <li>
                <NavCard href={link_1.link} iconUrl={(link_1.icon as Media).url}>
                    {link_1.text}
                </NavCard>
            </li>

            <li>
                <NavCard href={link_2.link} iconUrl={(link_2.icon as Media).url}>
                    {link_2.text}
                </NavCard>
            </li>

            <li>
                <NavCard href={link_3.link} iconUrl={(link_3.icon as Media).url}>
                    {link_3.text}
                </NavCard>
            </li>

            <li>
                <NavCard href={link_4.link} iconUrl={(link_4.icon as Media).url}>
                    {link_4.text}
                </NavCard>
            </li>
        </ul>
    );
};

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
    desc?: string | null;
    isHomePage?: boolean;
    backgroundImage?: string;
    icon?: React.ReactNode;
    navigationList?: NavType;
}

export const Welcome = ({
    title,
    subtitle,
    desc,
    isHomePage,
    backgroundImage,
    icon,
    navigationList,
}: WelcomeProps) => {
    const searchParams = useSearchParams();

    const [activeTab, setActiveTab] = React.useState('dynamic-discounting');

    React.useEffect(() => {
        const tab = searchParams?.get('tab');
        if (tab) {
            setActiveTab(tab as string);
        }
    }, [searchParams]);

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

                        {desc && (
                            <div className={styles.descWrapper}>
                                <span className={styles.desc}>{desc}</span>
                            </div>
                        )}

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
                        {isHomePage ? (
                            navigationList && <HomePageMenu navList={navigationList} />
                        ) : (
                            <TabsMenu activeTab={activeTab} />
                        )}
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
