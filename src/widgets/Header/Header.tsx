import { Logo } from '@/shared/ui/Logo';
import { LinkButton } from '@/shared/ui/Button';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Logo />

            <div className={styles.buttons}>
                <LinkButton href={'/'}>Войти</LinkButton>
                <LinkButton href={'/'}>Оставить заявку</LinkButton>
            </div>
        </header>
    );
};
