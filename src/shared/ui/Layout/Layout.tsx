import React, { JSX } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

const Page = ({ children }: LayoutProps) => {
    return <div className={styles.page}>{children}</div>;
};

const Main = ({ children }: LayoutProps) => {
    return <main className={styles.main}>{children}</main>;
};

const Container = ({
    children,
    tag = 'section',
}: LayoutProps & { tag?: keyof JSX.IntrinsicElements }) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return <Tag className={styles.container}>{children}</Tag>;
};

export const Layout = {
    Page,
    Main,
    Container,
};
