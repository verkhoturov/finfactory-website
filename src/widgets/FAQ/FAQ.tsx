import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import {
    AccordionItem,
    AccordionItemContent,
    AccordionItemTrigger,
    AccordionRoot,
} from '@/shared/ui/Accordion';

import styles from './FAQ.module.css';

const items = [
    {
        value: '1',
        title: 'Какие финансовые продукты вы предлагаете для малого и среднего бизнеса?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        value: '2',
        title: 'Как быстро можно получить одобрение на кредит?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        value: '3',
        title: 'Какие преимущества я получу, работая с вашей компанией?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        value: '4',
        title: 'Предоставляете ли вы консультации по выбору финансовых решений?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

export const FAQ = () => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>FAQ</Heading.H2>

                <AccordionRoot multiple>
                    {items.map((item, index) => (
                        <AccordionItem key={index} value={item.value}>
                            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                            <AccordionItemContent>{item.text}</AccordionItemContent>
                        </AccordionItem>
                    ))}
                </AccordionRoot>
            </div>
        </Layout.Container>
    );
};
