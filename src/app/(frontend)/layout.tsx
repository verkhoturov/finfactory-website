// import type { Metadata } from 'next'

// import { cn } from '@/utilities/ui'
// import { GeistMono } from 'geist/font/mono'
// import { GeistSans } from 'geist/font/sans'
import React from 'react';

/*
import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
*/

// import { draftMode } from 'next/headers'

import './globals.css';
// import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    // const { isEnabled } = await draftMode()

    return (
        <html lang="ru" suppressHydrationWarning>
            <body>{children}</body>
        </html>
    );
}
