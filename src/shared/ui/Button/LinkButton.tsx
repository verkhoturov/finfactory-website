import React from 'react';
import Link, { LinkProps } from 'next/link';

import styles from './Button.module.css';

interface LinkButtonProps extends LinkProps {
    children: React.ReactNode;
}

export const LinkButton = ({ children, ...rest }: LinkButtonProps) => {
    return (
        <Link {...rest} className={styles.wrapper}>
            {children}
        </Link>
    );
};
