'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/shared/ui/Layout';
import { Logo } from '@/shared/ui/Logo';
import { Heading } from '@/shared/ui/Heading';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

import type { Footer as FooterProps, Media } from '@/payload-types';

import styles from './Footer.module.css';

const NavigationList = ({
    title,
    links,
}: {
    title: string;
    links?:
        | {
              text: string;
              link: string;
              id?: string | null;
          }[]
        | null;
}) => {
    console.log('NavigationList links', links);

    if (!links) return null;

    return (
        <div className={styles.navCol}>
            <Heading.H3 color="light">{title}</Heading.H3>

            <nav className={styles.nav}>
                <ul>
                    {links.map(({ text, link, id }, i) => (
                        <li key={id || i}>
                            <Link href={link} className={styles.link}>
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export const Footer = ({ nav, info, additional_info, social }: FooterProps) => {
    console.log('Footer nav', nav);
    return (
        <footer className={styles.wrapper}>
            <Layout.Container tag="div">
                <div className={styles.navigation}>
                    <div className={styles.contactForm}>
                        <Heading.H3 color="light">Корпорации и холдинги</Heading.H3>

                        <form>
                            <Input placeholder="Имя" />
                            <Input placeholder="Телефон" type="tel" />
                            <Input placeholder="E-mail" type="email" />

                            <Button>Оставить заявку</Button>
                        </form>
                    </div>

                    {nav && (
                        <div className={styles.links}>
                            {nav.map(({ list }, i) => (
                                <NavigationList key={i} title={list.title} links={list.links} />
                            ))}
                        </div>
                    )}
                </div>
            </Layout.Container>

            <div className={styles.info}>
                <div className={styles.firstCol}>
                    <div className={styles.logoWrapper}>
                        <Logo isSmall />
                    </div>

                    <div className={styles.firstContentWrapper}>
                        {info && <span className={styles.text}>{info}</span>}
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.secondContentWrapper}>
                        {additional_info && <span className={styles.text}>{additional_info}</span>}
                    </div>

                    {social && (
                        <div className={styles.soc}>
                            {social.map(({ network: { link, image, name }, id }, i) => (
                                <Link key={id || i} href={link}>
                                    <Image
                                        src={(image as Media)?.url || ''}
                                        alt={name || ''}
                                        width={20}
                                        height={20}
                                    />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};
