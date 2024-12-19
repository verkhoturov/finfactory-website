import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { SimpleCard } from '@/shared/ui/SimpleCard';

import styles from './Blog.module.css';
import oneImg from './img/1.jpg';
import twoImg from './img/2.jpg';
import threeImg from './img/3.jpg';

export const Blog = () => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>Блог и статьи</Heading.H2>

                <div className={styles.row}>
                    <SimpleCard
                        varinant="link"
                        href={'#'}
                        image={oneImg}
                        desc={`Как выбрать оптимальное 
                            финансовое решение для
                             бизнеса`}
                    />
                    <SimpleCard
                        varinant="link"
                        href={'#'}
                        image={twoImg}
                        desc={`Тренды в корпоративном 
                            кредитовании 2024 года`}
                    />

                    <SimpleCard
                        varinant="link"
                        href={'#'}
                        image={threeImg}
                        desc={`Преимущества кастомизированных
                             финансовых продуктов`}
                    />
                </div>
            </div>
        </Layout.Container>
    );
};
