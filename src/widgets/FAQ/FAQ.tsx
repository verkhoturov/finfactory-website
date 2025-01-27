import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from '@/shared/ui/Accordion';
import type { HomePage as HomePageType } from '@/payload-types';

import styles from './FAQ.module.css';

type FAQProps = Pick<HomePageType, 'faq'>;

export const FAQ = ({ faq }: FAQProps) => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                {faq?.title && <Heading.H2>FAQ</Heading.H2>}

                <AccordionRoot multiple>
                    {faq?.list?.map((item, index) => (
                        <AccordionItem key={index} value={item.id || index.toString()}>
                            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                            <AccordionItemContent>{item.text}</AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
            </div>
        </Layout.Container>
    );
};
