import Image from 'next/image';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';

import type { HomePage as HomePageType, Media } from '@/payload-types';

import styles from './Partners.module.css';

type PartnersProps = Pick<HomePageType, 'partners'>;

export const Partners = ({ partners }: PartnersProps) => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                {partners?.title && <Heading.H2>{partners.title}</Heading.H2>}

                <div className={styles.row}>
                    {partners?.list?.map((item, index) => (
                        <Image
                            key={index}
                            src={(item.image as Media)?.url || ''}
                            alt={''}
                            width={((item.image as Media)?.width || 100) / 3.25}
                            height={((item.image as Media)?.height || 100) / 3.25}
                        />
                    ))}
                </div>
            </div>
        </Layout.Container>
    );
};
