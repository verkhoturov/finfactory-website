'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { FAQ } from './FAQ';

interface ProductFAQProps {
    tabs: {
        tab: {
            text: string;
            link: string;
            content?: {
                faq?: {
                    title?: string | null;
                    list?:
                        | {
                              title: string;
                              text: string;
                              id?: string | null;
                          }[]
                        | null;
                };
            };
        };
    }[];
}

export const ProductFAQ = ({ tabs }: ProductFAQProps) => {
    const searchParams = useSearchParams();
    const tab = searchParams?.get('tab');

    const activeTab = tab || 'dynamic-discounting';

    const { content } = tabs.find(({ tab }) => tab.link === activeTab)?.tab || {};
    const { faq } = content || {};

    if (!faq) return null;

    return (
        <>
            <FAQ faq={faq} />
        </>
    );
};
