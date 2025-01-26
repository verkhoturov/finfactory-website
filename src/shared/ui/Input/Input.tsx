import React from 'react';

import styles from './Input.module.css';

/*
interface InputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {};
*/

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export const Input = (props: InputProps) => {
    return (
        <div className={styles.wrapper}>
            <input {...props} />
        </div>
    );
};
