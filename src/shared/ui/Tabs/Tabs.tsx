import { Tabs as ChakraTabs } from '@chakra-ui/react';

import styles from './Tabs.module.css';

interface TabsProps {
    data: {
        value: string;
        title: string;
        content: React.ReactNode;
        disabled?: boolean;
    }[];
}

export const Tabs = ({ data }: TabsProps) => {
    if (!data.length) return null;

    return (
        <ChakraTabs.Root className={styles.wrapper} defaultValue={data[0].value} variant={'subtle'}>
            <ChakraTabs.List className={styles.listCol}>
                {data.map((item) => (
                    <ChakraTabs.Trigger
                        className={styles.button}
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                    >
                        {item.title}
                    </ChakraTabs.Trigger>
                ))}
            </ChakraTabs.List>

            <div className={styles.contentCol}>
                {data.map((item) => (
                    <ChakraTabs.Content key={item.value} value={item.value}>
                        {item.content}
                    </ChakraTabs.Content>
                ))}
            </div>
        </ChakraTabs.Root>
    );
};
