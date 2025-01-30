import { SystemCapabilities } from '@/widgets/SystemCapabilities';
import { Blog } from '@/widgets/Blog';
import { ProductFAQ } from '@/widgets/FAQ';
import { Welcome } from '@/shared/ui/Welcome';
import { ServiceInfo } from '@/widgets/ServiceInfo';
import { Profit } from '@/widgets/Profit';
import { Suspense } from 'react';

import type { ProductsPage as ProductsPageProps, Media, PostsPage as Posts } from '@/payload-types';

export const ProductPage = ({
    welcome,
    tabs,
    posts,
}: ProductsPageProps & {
    posts?: Posts[];
}) => {
    return (
        <>
            <Welcome
                uppertitle={welcome.uppertitle || ''}
                title={welcome.title}
                subtitle={welcome.subtitle || ''}
                desc={welcome.description}
                backgroundImage={(welcome.bg_image as Media)?.url || ''}
                icon={welcome.icon as Media}
                tabs={tabs || []}
            />
            <Suspense>
                <ServiceInfo tabs={tabs || []} />
                <Profit tabs={tabs || []} />
            </Suspense>
            <SystemCapabilities />
            <Suspense>
                <ProductFAQ tabs={tabs || []} />
            </Suspense>
            <Blog posts={posts || []} />
        </>
    );
};
