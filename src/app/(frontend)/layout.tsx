import React from 'react';
import { Roboto } from 'next/font/google';
import { UIKitProvider } from '@/shared/ui/UIKitProvider';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

import './globals.css';

const roboto = Roboto({
    weight: ['400', '700', '900'],
    subsets: ['latin'],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" suppressHydrationWarning className={roboto.className}>
            <body>
                <UIKitProvider>
                    <Layout.Page>
                        <Header />
                        <Layout.Main>{children}</Layout.Main>
                        <Footer />
                    </Layout.Page>
                </UIKitProvider>
            </body>
        </html>
    );
}
