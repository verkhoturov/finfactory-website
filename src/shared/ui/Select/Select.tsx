import React from 'react';
import { useRouter } from 'next/router';
import {
    createListCollection,
    IconButton as ChakraIconButton,
    Select as ChakraSelect,
    Portal,
} from '@chakra-ui/react';
import type { CollectionItem, ButtonProps } from '@chakra-ui/react';
import { LuX } from 'react-icons/lu';
import { Icons } from '@/shared/ui/Icons';

import styles from './Select.module.css';

export type CloseButtonProps = ButtonProps;

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
    function CloseButton(props, ref) {
        return (
            <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
                {props.children ?? <LuX />}
            </ChakraIconButton>
        );
    },
);

interface SelectTriggerProps extends ChakraSelect.ControlProps {
    clearable?: boolean;
}

export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
    function SelectTrigger(props, ref) {
        const { children, ...rest } = props;
        return (
            <ChakraSelect.Control {...rest}>
                <ChakraSelect.Trigger ref={ref}>{children}</ChakraSelect.Trigger>

                <ChakraSelect.IndicatorGroup className={styles.indicator}>
                    <Icons.Arrow />
                </ChakraSelect.IndicatorGroup>
            </ChakraSelect.Control>
        );
    },
);

interface SelectContentProps extends ChakraSelect.ContentProps {
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
    function SelectContent(props, ref) {
        const { portalled = true, portalRef, ...rest } = props;
        return (
            <Portal disabled={!portalled} container={portalRef}>
                <ChakraSelect.Positioner>
                    <ChakraSelect.Content {...rest} ref={ref} />
                </ChakraSelect.Positioner>
            </Portal>
        );
    },
);

export const SelectItem = React.forwardRef<HTMLDivElement, ChakraSelect.ItemProps>(
    function SelectItem(props, ref) {
        const { item, children, ...rest } = props;
        return (
            <ChakraSelect.Item key={item.value} item={item} {...rest} ref={ref}>
                {children}
                <ChakraSelect.ItemIndicator />
            </ChakraSelect.Item>
        );
    },
);

interface SelectValueTextProps extends Omit<ChakraSelect.ValueTextProps, 'children'> {
    children?(items: CollectionItem[]): React.ReactNode;
}

export const SelectValueText = React.forwardRef<HTMLSpanElement, SelectValueTextProps>(
    function SelectValueText(props, ref) {
        const { children, ...rest } = props;
        return (
            <ChakraSelect.ValueText {...rest} ref={ref}>
                <ChakraSelect.Context>
                    {(select) => {
                        const items = select.selectedItems;
                        if (items.length === 0) return props.placeholder;
                        if (children) return children(items);
                        if (items.length === 1) return select.collection.stringifyItem(items[0]);
                        return `${items.length} selected`;
                    }}
                </ChakraSelect.Context>
            </ChakraSelect.ValueText>
        );
    },
);

export const SelectRoot = React.forwardRef<HTMLDivElement, ChakraSelect.RootProps>(
    function SelectRoot(props, ref) {
        return (
            <ChakraSelect.Root
                {...props}
                ref={ref}
                positioning={{ sameWidth: true, ...props.positioning }}
            >
                {props.asChild ? (
                    props.children
                ) : (
                    <>
                        <ChakraSelect.HiddenSelect />
                        {props.children}
                    </>
                )}
            </ChakraSelect.Root>
        );
    },
) as ChakraSelect.RootComponent;

interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
    label: React.ReactNode;
}

export const SelectItemGroup = React.forwardRef<HTMLDivElement, SelectItemGroupProps>(
    function SelectItemGroup(props, ref) {
        const { children, label, ...rest } = props;
        return (
            <ChakraSelect.ItemGroup {...rest} ref={ref}>
                <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
                {children}
            </ChakraSelect.ItemGroup>
        );
    },
);

export const SelectLabel = ChakraSelect.Label;
export const SelectItemText = ChakraSelect.ItemText;

interface SelectProps {
    items: {
        label: string;
        value: string;
    }[];
}

export const Select = ({ items }: SelectProps) => {
    const router = useRouter();

    return (
        <div className={styles.wrapper}>
            <SelectRoot
                className={styles.select}
                positioning={{
                    offset: { mainAxis: 10 },
                }}
                collection={createListCollection({
                    items,
                })}
                defaultValue={[items[0].value]}
                onValueChange={(e) => router.push(`?tab=${e.value}`)}
            >
                <SelectLabel />
                <SelectTrigger>
                    <SelectValueText />
                </SelectTrigger>
                <SelectContent>
                    {items.map((item) => (
                        <SelectItem key={item.value} item={item}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectRoot>
        </div>
    );
};
