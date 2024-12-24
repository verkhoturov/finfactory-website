import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from '@/shared/ui/Logo';
import { LinkButton } from '@/shared/ui/Button';

import styles from './Header.module.css';

export const Header = () => {
    const router = useRouter();

    const isHomePage = router.pathname === '/';

    return (
        <header className={styles.wrapper}>
            <Logo />

            {!isHomePage ? (
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link
                                href={'/corporations-and-holdings'}
                                className={
                                    router.pathname === '/corporations-and-holdings'
                                        ? styles.active
                                        : ''
                                }
                            >
                                Корпорации и холдинги
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/companies-and-enterprises'}
                                className={
                                    router.pathname === '/companies-and-enterprises'
                                        ? styles.active
                                        : ''
                                }
                            >
                                Компании и Предприятия
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/financial-institutions'}
                                className={
                                    router.pathname === '/financial-institutions'
                                        ? styles.active
                                        : ''
                                }
                            >
                                Финансовым Институтам
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/agents'}
                                className={router.pathname === '/agents' ? styles.active : ''}
                            >
                                Агентам
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}

            <div className={styles.buttons}>
                <LinkButton href={'/'}>Войти</LinkButton>
                <LinkButton href={'/'}>Оставить заявку</LinkButton>
            </div>
        </header>
    );
};
