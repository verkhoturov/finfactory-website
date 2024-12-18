import Head from 'next/head';

import { Header } from '../widgets/Header';
import { Footer } from '../widgets/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Finfactory</title>
                <meta name="description" content="-" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div>
                <Header />
                <main>main</main>
                <Footer />
            </div>
        </>
    );
}
