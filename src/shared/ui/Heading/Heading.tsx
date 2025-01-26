import React from 'react';
import cn from 'classnames';
import styles from './Heading.module.css';

const getAdditionalStyles = (color: 'dark' | 'light') => {
    return { [styles.dark]: color === 'dark', [styles.light]: color === 'light' };
};

interface HeadingProps {
    children: React.ReactNode;
    color?: 'dark' | 'light';
}

const H1 = ({ children, color = 'light' }: HeadingProps) => {
    return <h1 className={cn(styles.h1, getAdditionalStyles(color))}>{children}</h1>;
};

const H2 = ({ children, color = 'dark' }: HeadingProps) => {
    return <h2 className={cn(styles.h2, getAdditionalStyles(color))}>{children}</h2>;
};

const H3 = ({ children, color = 'dark' }: HeadingProps) => {
    return <h3 className={cn(styles.h3, getAdditionalStyles(color))}>{children}</h3>;
};

export const Heading = {
    H1,
    H2,
    H3,
};
