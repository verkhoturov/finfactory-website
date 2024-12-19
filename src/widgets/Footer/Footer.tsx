import Link from 'next/link';
import { Layout } from '@/shared/ui/Layout';
import { Logo } from '@/shared/ui/Logo';
import { Icons } from '@/shared/ui/Icons';
import { Heading } from '@/shared/ui/Heading';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

import styles from './Footer.module.css';

const NavigationList = ({ title }: { title: string }) => {
    return (
        <div className={styles.navCol}>
            <Heading.H3 color="light">{title}</Heading.H3>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={'#'} className={styles.link}>
                            Динамическое дисконтирование
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className={styles.link}>
                            Система гибких расчетных дат
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className={styles.link}>
                            Аукцион дисконтирования
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className={styles.link}>
                            Финансирование покупателей
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className={styles.link}>
                            Биржа факторинга
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className={styles.link}>
                            Верификация
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export const Footer = () => {
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

                    <div className={styles.links}>
                        <NavigationList title={'Корпорации\nи холдинги'} />
                        <NavigationList title={'Компании\nи Предприятия'} />
                        <NavigationList title={'Финансовым\nИнститутам'} />
                        <NavigationList title={'Агентам'} />
                    </div>
                </div>
            </Layout.Container>

            <div className={styles.info}>
                <div className={styles.firstCol}>
                    <div className={styles.logoWrapper}>
                        <Logo isSmall />
                    </div>

                    <div className={styles.firstContentWrapper}>
                        <span className={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been
                        </span>
                    </div>
                </div>

                <div className={styles.secondCol}>
                    <div className={styles.secondContentWrapper}>
                        <span className={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown pr
                        </span>
                    </div>

                    <div className={styles.soc}>
                        <Link href={'/'}>
                            <Icons.Facebook />
                        </Link>
                        <Link href={'/'}>
                            <Icons.LinkedIn />
                        </Link>
                        <Link href={'/'}>
                            <Icons.Telegram />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
