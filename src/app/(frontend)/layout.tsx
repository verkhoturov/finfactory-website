import React from 'react';
import { PageLayout, queryCommonContent } from '@/widgets/PageLayout';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const { footerData, headerData } = await queryCommonContent({ draft: false });

    return (
        <PageLayout footerData={footerData} headerData={headerData}>
            {children}
        </PageLayout>
    );
}
