import React from 'react';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';

import styles from './NavCard.module.css';

interface NavCardProps extends LinkProps {
    children: React.ReactNode;
    iconUrl?: string;
    isSmall?: boolean;
    isDisabled?: boolean;
    isActive?: boolean;
}

export const NavCard = ({
    children,
    iconUrl,
    isSmall,
    isActive,
    isDisabled,
    ...rest
}: NavCardProps) => {
    if (isSmall) {
        return (
            <Link
                {...rest}
                className={cn(styles.smallCard, {
                    [styles.disabled]: isDisabled,
                    [styles.active]: isActive,
                })}
            >
                <span className={styles.text}>{children}</span>
            </Link>
        );
    }

    return (
        <div className={styles.wrapper}>
            <Link
                {...rest}
                className={styles.card}
                style={{ backgroundImage: iconUrl ? `url(${iconUrl})` : 'none' }}
            >
                <span className={styles.text}>{children}</span>
            </Link>
        </div>
    );
};
