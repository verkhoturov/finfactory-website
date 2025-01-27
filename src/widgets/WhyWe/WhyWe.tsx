import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { SimpleCard } from '@/shared/ui/SimpleCard';

import type { HomePage as HomePageType, Media } from '@/payload-types';

import styles from './WhyWe.module.css';

type WhyWeProps = Pick<HomePageType, 'advantages'>;

export const WhyWe = ({ advantages }: WhyWeProps) => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                {advantages?.title && <Heading.H2>{advantages.title}</Heading.H2>}

                <div className={styles.row}>
                    {advantages?.list?.map((item, index) => (
                        <SimpleCard
                            key={index}
                            image={{
                                src: (item.image as Media).url || '',
                                width: (item.image as Media).width || 100,
                                height: (item.image as Media).height || 100,
                            }}
                            desc={item.text}
                        />
                    ))}
                </div>
            </div>
        </Layout.Container>
    );
};
