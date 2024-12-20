import { Accordion, HStack, AccordionItemProps, AccordionRootProps } from '@chakra-ui/react';
import * as React from 'react';
import { LuPlus } from 'react-icons/lu';

import styles from './Accordion.module.css';

interface AccordionItemTriggerProps extends Accordion.ItemTriggerProps {
    indicatorPlacement?: 'start' | 'end';
}

export const AccordionItemTrigger = React.forwardRef<HTMLButtonElement, AccordionItemTriggerProps>(
    function AccordionItemTrigger(props, ref) {
        const { children, indicatorPlacement = 'end', ...rest } = props;
        return (
            <Accordion.ItemTrigger {...rest} ref={ref}>
                <HStack gap="4" flex="1" textAlign="start" width="full">
                    {children}
                </HStack>

                {indicatorPlacement === 'end' && (
                    <Accordion.ItemIndicator
                        rotate={{ base: '0deg', _open: '45deg' }}
                        color={'black'}
                        cursor={'pointer'}
                    >
                        <LuPlus />
                    </Accordion.ItemIndicator>
                )}
            </Accordion.ItemTrigger>
        );
    },
);

export const AccordionItemContent = React.forwardRef<HTMLDivElement, Accordion.ItemContentProps>(
    function AccordionItemContent(props, ref) {
        return (
            <Accordion.ItemContent>
                <Accordion.ItemBody {...props} ref={ref} />
            </Accordion.ItemContent>
        );
    },
);

export const AccordionItem = (props: AccordionItemProps) => {
    return (
        <Accordion.Item className={styles.item} {...props}>
            {props.children}
        </Accordion.Item>
    );
};

export const AccordionRoot = (props: AccordionRootProps) => {
    return (
        <Accordion.Root className={styles.wrapper} {...props}>
            {props.children}
        </Accordion.Root>
    );
};
