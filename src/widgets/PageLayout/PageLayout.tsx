import React, { cache } from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Roboto } from 'next/font/google';
import { UIKitProvider } from '@/shared/ui/UIKitProvider';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

import type { Footer as FooterData } from '@/payload-types';

import '@/styles/globals.css';

const roboto = Roboto({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
});

export const PageLayout = ({
    children,
    footerData,
}: {
    children: React.ReactNode;
    footerData: FooterData;
}) => {
    return (
        <html lang="ru" suppressHydrationWarning className={roboto.className}>
            <body>
                <UIKitProvider>
                    <Layout.Page>
                        <Header />
                        <Layout.Main>{children}</Layout.Main>
                        <Footer {...footerData} />
                    </Layout.Page>
                </UIKitProvider>
            </body>
        </html>
    );
};

export const queryCommonContent = cache(async ({ draft }: { draft?: boolean }) => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.findGlobal({
        slug: 'footer',
        draft,
    });

    return result || null;
});
