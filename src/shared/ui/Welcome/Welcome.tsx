import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { NavCard } from '@/shared/ui/NavCard';

import styles from './Welcome.module.css';

import holdingsImg from './img/holdings.svg';
import companyImg from './img/company.svg';
import finImg from './img/fin.svg';
import agentsImg from './img/agents.svg';
import React from 'react';

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

            <section className={styles.navigationWrapper}>
                <Layout.Container tag="div">
                    <nav className={styles.nav}>{isHomePage ? <HomePageMenu /> : null}</nav>
                </Layout.Container>
            </section>
        </>
    );
};
