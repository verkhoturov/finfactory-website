import { HomeWelcome } from '@/widgets/HomeWelcome';
import { WhyWe } from '@/widgets/WhyWe';
import { SystemCapabilities } from '@/widgets/SystemCapabilities';
import { Blog } from '@/widgets/Blog';
import { FAQ } from '@/widgets/FAQ';
import { Products } from '@/widgets/Products';
import { Partners } from '@/widgets/Partners';
import { Feedback } from '@/widgets/Feedback';
import type { HomePage as HomePageProps, PostsPage as Posts } from '@/payload-types';

export const Home = (
    props: HomePageProps & {
        posts?: Posts[];
    },
) => {
    return (
        <>
            <HomeWelcome welcome={props.welcome} navigation={props.navigation} />
            <WhyWe advantages={props.advantages} />
            <Products products={props.products} />
            <Partners partners={props.partners} />
            <SystemCapabilities system_capabilities={props.system_capabilities} />
            <Feedback feedback={props.feedback} />
            <FAQ faq={props.faq} />
            <Blog posts={props.posts || []} />
        </>
    );
};
