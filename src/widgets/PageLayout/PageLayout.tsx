import React, { cache } from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Roboto, Inter } from 'next/font/google';
import { UIKitProvider } from '@/shared/ui/UIKitProvider';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

import type { Footer as FooterData, Header as HeaderData } from '@/payload-types';

import '@/styles/globals.css';
import '@/styles/swiper.css';

const roboto = Roboto({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
});

const inter = Inter({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const PageLayout = ({
    children,
    footerData,
    headerData,
}: {
    children: React.ReactNode;
    footerData: FooterData;
    headerData: HeaderData;
}) => {
    return (
        <html
            lang="ru"
            suppressHydrationWarning
            className={`${inter.className} ${roboto.className}`}
        >
            <body>
                <UIKitProvider>
                    <Layout.Page>
                        <Header {...headerData} />
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

    const footerData = await payload.findGlobal({
        slug: 'footer',
        draft,
    });

    const headerData = await payload.findGlobal({
        slug: 'header',
        draft,
    });

    return { footerData, headerData };
});
