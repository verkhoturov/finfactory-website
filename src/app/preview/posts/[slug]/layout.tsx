import React from 'react';
import { PageLayout, queryCommonContent } from '@/widgets/PageLayout';

export const metadata = {
    title: 'Черновик',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const { footerData, headerData } = await queryCommonContent({ draft: true });

    return (
        <PageLayout footerData={footerData} headerData={headerData}>
            {children}
        </PageLayout>
    );
}
