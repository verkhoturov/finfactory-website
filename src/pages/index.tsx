import Head from 'next/head';
import { Layout } from '@/shared/ui/Layout';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { Welcome } from '@/widgets/Welcome';
import { WhyWe } from '@/widgets/WhyWe';
import { SystemCapabilities } from '@/widgets/SystemCapabilities';
import { Blog } from '@/widgets/Blog';
import { FAQ } from '@/widgets/FAQ';
import { Products } from '@/widgets/Products';

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
                    <Welcome />
                    <WhyWe />
                    <Products />
                    <SystemCapabilities />
                    <FAQ />
                    <Blog />
                </Layout.Main>
                <Footer />
            </Layout.Page>
        </>
    );
}
