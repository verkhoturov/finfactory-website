import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { Tabs } from '@/shared/ui/Tabs';

import type { HomePage as HomePageType, Media } from '@/payload-types';

import styles from './Products.module.css';

const ProductsRow = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.row}>{children}</div>;
};

const ProductCard = ({ text, icon }: { text: string; icon?: string }) => {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${icon})` }}>
            <span>{text}</span>
        </div>
    );
};

type ProductsProps = Pick<HomePageType, 'products'>;

export const Products = ({ products }: ProductsProps) => {
    const tabsData = products?.list?.map((item, index) => ({
        value: item.id || index.toString(),
        title: item.product.title,
        content: (
            <ProductsRow key={index}>
                {item.product.list?.map((item, index) => (
                    <ProductCard
                        key={index}
                        text={item.text}
                        icon={(item.image as Media)?.url || ''}
                    />
                ))}
            </ProductsRow>
        ),
    }));
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                {products?.title && <Heading.H2>{products.title}</Heading.H2>}

                {tabsData && <Tabs data={tabsData} />}
            </div>
        </Layout.Container>
    );
};
