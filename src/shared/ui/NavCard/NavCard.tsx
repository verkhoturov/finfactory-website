import React from 'react';
import Link, { LinkProps } from 'next/link';

import styles from './NavCard.module.css';

interface NavCardProps extends LinkProps {
    children: React.ReactNode;
    iconUrl?: string;
}

export const NavCard = ({ children, iconUrl, ...rest }: NavCardProps) => {
    return (
        <div className={styles.wrapper}>
            <Link {...rest} className={styles.card} style={{ backgroundImage: `url(${iconUrl})` }}>
                <span className={styles.text}>{children}</span>
            </Link>
        </div>
    );
};
