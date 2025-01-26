import React from 'react';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';

import styles from './Button.module.css';

interface LinkButtonProps extends LinkProps {
    children: React.ReactNode;
    variant?: 'cta' | 'outline';
}

export const LinkButton = ({ children, variant = 'outline', ...rest }: LinkButtonProps) => {
    return (
        <Link
            {...rest}
            className={cn(styles.wrapper, {
                [styles.cta]: variant === 'cta',
                [styles.outline]: variant === 'outline',
            })}
        >
            {children}
        </Link>
    );
};
