'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { Button } from '@/shared/ui/Button';

import styles from './ServiceInfo.module.css';

interface ServiceInfoProps {
    tabs: {
        tab: {
            text: string;
            link: string;
            content?: {
                title?: string | null;
                block_1?: {
                    title?: string | null;
                    text?: string | null;
                };
                block_2?: {
                    title?: string | null;
                    text?: string | null;
                };
            };
        };
    }[];
}

export const ServiceInfo = ({ tabs }: ServiceInfoProps) => {
    const searchParams = useSearchParams();
    const tab = searchParams?.get('tab');

    const activeTab = tab || 'dynamic-discounting';

    if (!tabs || tab?.length === 0) return null;

    const activeTabContent = tabs.find(({ tab }) => tab.link === activeTab);

    if (!activeTabContent || !activeTabContent.tab.content) return null;

    const { title, block_1, block_2 } = activeTabContent.tab.content;

    const showBlocks =
        block_1 && block_2 && Object.keys(block_1).length > 0 && Object.keys(block_2).length > 0;

    if (!showBlocks && !title) return null;

    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>{title}</Heading.H2>

                {showBlocks && (
                    <div className={styles.info}>
                        {Object.keys(block_1).length > 0 && (
                            <div className={styles.infoTop}>
                                {block_1.title && <Heading.H2>{block_1.title}</Heading.H2>}

                                <p>{block_1.text}</p>
                            </div>
                        )}
                        {Object.keys(block_2).length > 0 && (block_2.title || block_2.text) && (
                            <div className={styles.infoBottom}>
                                {block_2.title && <Heading.H2>{block_2.title}</Heading.H2>}

                                <p>{block_2.text}</p>
                                <br />
                                <br />

                                <Button>Подключиться к платформе</Button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Layout.Container>
    );
};
