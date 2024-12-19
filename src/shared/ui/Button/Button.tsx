import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
    variant?: 'cta' | 'outline';
}

export const Button = ({ children, variant = 'cta', ...rest }: ButtonProps) => {
    return (
        <button
            {...rest}
            className={cn(styles.wrapper, {
                [styles.cta]: variant === 'cta',
                [styles.outline]: variant === 'outline',
            })}
        >
            {children}
        </button>
    );
};
