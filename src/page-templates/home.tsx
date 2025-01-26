import { HomeWelcome } from '@/widgets/HomeWelcome';
import { WhyWe } from '@/widgets/WhyWe';
import { SystemCapabilities } from '@/widgets/SystemCapabilities';
import { Blog } from '@/widgets/Blog';
import { FAQ } from '@/widgets/FAQ';
import { Products } from '@/widgets/Products';
import { Partners } from '@/widgets/Partners';

import type { HomePage as HomePageProps } from '@/payload-types';

export const Home = (props: HomePageProps) => {
    return (
        <>
            <HomeWelcome welcome={props.welcome} navigation={props.navigation} />
            <WhyWe />
            <Products />
            <Partners />
            <SystemCapabilities />
            <FAQ />
            <Blog />
        </>
    );
};
