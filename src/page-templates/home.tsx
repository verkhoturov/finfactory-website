import { HomeWelcome } from '@/widgets/HomeWelcome';
import { WhyWe } from '@/widgets/WhyWe';
import { SystemCapabilities } from '@/widgets/SystemCapabilities';
// import { Blog } from '@/widgets/Blog';
import { FAQ } from '@/widgets/FAQ';
import { Products } from '@/widgets/Products';
import { Partners } from '@/widgets/Partners';

import type { HomePage as HomePageProps } from '@/payload-types';

export const Home = (props: HomePageProps) => {
    return (
        <>
            <HomeWelcome welcome={props.welcome} navigation={props.navigation} />
            <WhyWe advantages={props.advantages} />
            <Products products={props.products} />
            <Partners partners={props.partners} />
            <SystemCapabilities system_capabilities={props.system_capabilities} />
            <FAQ faq={props.faq} />
            {/* <Blog /> */}
        </>
    );
};
