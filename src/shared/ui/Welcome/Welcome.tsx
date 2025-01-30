'use client';

import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { NavCard } from '@/shared/ui/NavCard';
import { Select } from '@/shared/ui/Select';
import type { HomePage as HomePageType, Media } from '@/payload-types';

import styles from './Welcome.module.css';

type NavType = Pick<HomePageType, 'navigation'>;

const HomePageMenu = ({ navList }: { navList: NavType }) => {
    const { navigation } = navList;
    if (!navigation) return null;

    console.log("navigation", navigation);

    return (
        <ul>
            {navigation.map(({ link }, i) => (
                <li key={i}>
                    <NavCard href={link.link} iconUrl={(link.icon as Media).url}>
                        {link.text}
                    </NavCard>
                </li>
            ))}
        </ul>
    );
};

const TabsMenu = ({
    activeTab,
    tabs,
}: {
    activeTab: string;
    tabs: {
        tab: {
            text: string;
            link: string;
        };
    }[];
}) => (
    <ul>
        {tabs.map(({ tab }, i) => (
            <li key={i}>
                <NavCard
                    href={`?tab=${tab.link}`}
                    isActive={activeTab === tab.link}
                    isSmall
                    scroll={false}
                >
                    {tab.text}
                </NavCard>
            </li>
        ))}
    </ul>
);

interface WelcomeProps {
    title: string;
    uppertitle?: string;
    subtitle?: string;
    desc?: string | null;
    isHomePage?: boolean;
    backgroundImage?: string;
    icon?: Media;
    navigationList?: NavType;
    tabs: {
        tab: {
            text: string;
            link: string;
        };
    }[];
}

export const Welcome = ({
    title,
    uppertitle,
    subtitle,
    desc,
    isHomePage,
    backgroundImage,
    icon,
    navigationList,
    tabs,
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
                        {uppertitle && <Heading.H2 color="light">{uppertitle}</Heading.H2>}
                        <Heading.H1>{title}</Heading.H1>
                        {subtitle && <Heading.H2 color="light">{subtitle}</Heading.H2>}

                        {desc && (
                            <div className={styles.descWrapper}>
                                <span className={styles.desc}>{desc}</span>
                            </div>
                        )}

                        {icon && icon.url && (
                            <Image
                                src={icon.url}
                                alt=""
                                width={icon.width || 80}
                                height={icon.height || 80}
                                className={styles.icon}
                            />
                        )}
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
                            <TabsMenu tabs={tabs} activeTab={activeTab} />
                        )}
                    </nav>

                    {tabs.length > 0 ? (
                        <div
                            className={cn(styles.navSelectWrapper, {
                                [styles.home]: isHomePage,
                            })}
                        >
                            <Select
                                items={tabs.map(({ tab }) => ({
                                    label: tab.text,
                                    value: tab.link,
                                }))}
                            />
                        </div>
                    ) : null}
                </Layout.Container>
            </section>
        </>
    );
};
