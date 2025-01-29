'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Heading } from '@/shared/ui/Heading';
import { Layout } from '@/shared/ui/Layout';

import styles from './Profit.module.css';

type ProfitProps = {
    tabs: {
        tab: {
            text: string;
            link: string;
            content?: {
                profits?: {
                    title?: string | null;
                    profit_1?: {
                        title?: string | null;
                        points?:
                            | {
                                  text?: string | null;
                                  id?: string | null;
                              }[]
                            | null;
                    };
                    profit_2?: {
                        title?: string | null;
                        points?:
                            | {
                                  text?: string | null;
                                  id?: string | null;
                              }[]
                            | null;
                    };
                    profit_3?: {
                        title?: string | null;
                        points?:
                            | {
                                  text?: string | null;
                                  id?: string | null;
                              }[]
                            | null;
                    };
                    profit_4?: {
                        title?: string | null;
                        points?:
                            | {
                                  text?: string | null;
                                  id?: string | null;
                              }[]
                            | null;
                    };
                };
            };
        };
    }[];
};

export const Profit = ({ tabs }: ProfitProps) => {
    const searchParams = useSearchParams();
    const tab = searchParams?.get('tab');

    const activeTab = tab || 'dynamic-discounting';

    const { content } = tabs.find(({ tab }) => tab.link === activeTab)?.tab || {};
    const { profits } = content || {};

    if (
        !profits ||
        (profits.profit_1?.points?.length === 0 &&
            profits.profit_2?.points?.length === 0 &&
            profits.profit_3?.points?.length === 0 &&
            profits.profit_4?.points?.length === 0)
    )
        return null;

    const { profit_1, profit_2, profit_3, profit_4 } = profits;

    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    {profit_1?.points?.length ? (
                        <div className={styles.card}>
                            {profit_1?.title && <Heading.H2>{profit_1?.title}:</Heading.H2>}

                            <ul>
                                {profit_1?.points?.map((point, i) => <li key={i}>{point.text}</li>)}
                            </ul>
                        </div>
                    ) : null}

                    {profit_2?.points?.length ? (
                        <div className={styles.card}>
                            {profit_2?.title && <Heading.H2>{profit_2?.title}:</Heading.H2>}

                            <ul>
                                {profit_2?.points?.map((point, i) => <li key={i}>{point.text}</li>)}
                            </ul>
                        </div>
                    ) : null}

                    {profit_3?.points?.length ? (
                        <div className={styles.card}>
                            {profit_3?.title && <Heading.H2>{profit_3?.title}:</Heading.H2>}

                            <ul>
                                {profit_3?.points?.map((point, i) => <li key={i}>{point.text}</li>)}
                            </ul>
                        </div>
                    ) : null}

                    {profit_4?.points?.length ? (
                        <div className={styles.card}>
                            {profit_4?.title && <Heading.H2>{profit_4?.title}:</Heading.H2>}

                            <ul>
                                {profit_4?.points?.map((point, i) => <li key={i}>{point.text}</li>)}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </Layout.Container>
    );
};
