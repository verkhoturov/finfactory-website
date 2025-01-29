'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/shared/ui/Logo';
import { LinkButton } from '@/shared/ui/Button';

import type { Header as HeaderProps } from '@/payload-types';

import styles from './Header.module.css';

export const Header = ({ nav, buttons }: HeaderProps) => {
    const pathname = usePathname();
    const isHomePage = pathname === '/' || pathname === '/preview/home';

    return (
        <header className={styles.wrapper}>
            <Logo />

            {!isHomePage
                ? nav && (
                      <nav className={styles.nav}>
                          <ul>
                              {nav.map(({ text, link }, i) => (
                                  <li key={i}>
                                      <Link
                                          href={link}
                                          className={pathname === link ? styles.active : ''}
                                      >
                                          {text}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </nav>
                  )
                : null}

            {buttons && (
                <div className={styles.buttons}>
                    {buttons.map(({ button: { text, link } }, i) => (
                        <LinkButton key={i} href={link}>
                            {text}
                        </LinkButton>
                    ))}
                </div>
            )}
        </header>
    );
};
