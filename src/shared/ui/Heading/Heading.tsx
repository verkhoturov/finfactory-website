import React from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
    children: React.ReactNode;
}

const H1 = ({ children }: HeadingProps) => {
    return <h1 className={styles.pageTitle}>{children}</h1>;
};

export const Heading = {
    H1,
};
