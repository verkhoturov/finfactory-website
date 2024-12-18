import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { NavCard } from '@/shared/ui/NavCard';

import styles from './Welcome.module.css';
import bgImg from './img/bg.svg';
import holdingsImg from './img/holdings.svg';
import companyImg from './img/company.svg';
import finImg from './img/fin.svg';
import agentsImg from './img/agents.svg';

export const Welcome = () => {
    return (
        <>
            <section className={styles.wrapper}>
                <div className={styles.bg} style={{ backgroundImage: `url(${bgImg.src})` }} />
                <Layout.Container tag="div">
                    <div className={styles.inner}>
                        <Heading.H1>
                            Открытая{'\n'}
                            технологическая{'\n'}
                            платформа
                        </Heading.H1>

                        <div className={styles.descWrapper}>
                            <span className={styles.desc}>
                                для кредитования, факторинга,{'\n'}
                                динамического дисконтирования{'\n'}и других фин. инструментов
                            </span>
                        </div>
                    </div>
                </Layout.Container>
            </section>

            <section className={styles.navigationWrapper}>
                <Layout.Container tag="div">
                    <nav className={styles.nav}>
                        <ul>
                            <li>
                                <NavCard href={'#'} iconUrl={holdingsImg.src}>
                                    Корпорации{'\n'}и холдинги
                                </NavCard>
                            </li>
                            <li>
                                <NavCard href={'#'} iconUrl={companyImg.src}>
                                    Компании{'\n'}и Предприятия
                                </NavCard>
                            </li>
                            <li>
                                <NavCard href={'#'} iconUrl={finImg.src}>
                                    Финансовым{'\n'}
                                    Институтам
                                </NavCard>
                            </li>
                            <li>
                                <NavCard href={'#'} iconUrl={agentsImg.src}>
                                    Агентам{'\n'}
                                    {'\n'}
                                </NavCard>
                            </li>
                        </ul>
                    </nav>
                </Layout.Container>
            </section>
        </>
    );
};
