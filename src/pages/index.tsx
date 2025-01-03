import Head from 'next/head';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { HomeWelcome } from '@/widgets/HomeWelcome';
import { WhyWe } from '@/widgets/WhyWe';
import { SystemCapabilities } from '@/widgets/SystemCapabilities';
import { Blog } from '@/widgets/Blog';
import { FAQ } from '@/widgets/FAQ';
import { Products } from '@/widgets/Products';
import { Partners } from '@/widgets/Partners';

export default function Home() {
    return (
        <>
            <Head>
                <title>Finfactory</title>
                <meta name="description" content="-" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <Layout.Page>
                <Header />
                <Layout.Main>
                    <HomeWelcome />
                    <WhyWe />
                    <Products />
                    <Partners />
                    <SystemCapabilities />
                    <FAQ />
                    <Blog />
                </Layout.Main>
                <Footer />
            </Layout.Page>
        </>
    );
}
