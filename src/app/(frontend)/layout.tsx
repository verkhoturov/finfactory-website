import React from 'react';
import { PageLayout, queryCommonContent } from '@/widgets/PageLayout';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const footerData = await queryCommonContent({});

    return <PageLayout footerData={footerData}>{children}</PageLayout>;
}
