'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/shared/ui/Logo';
import { LinkButton } from '@/shared/ui/Button';

import styles from './Header.module.css';

export const Header = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '/preview/home';

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
                                    pathname === '/corporations-and-holdings' ? styles.active : ''
                                }
                            >
                                Корпорации и холдинги
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/companies-and-enterprises'}
                                className={
                                    pathname === '/companies-and-enterprises' ? styles.active : ''
                                }
                            >
                                Компании и Предприятия
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/financial-institutions'}
                                className={
                                    pathname === '/financial-institutions' ? styles.active : ''
                                }
                            >
                                Финансовым Институтам
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/agents'}
                                className={pathname === '/agents' ? styles.active : ''}
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
