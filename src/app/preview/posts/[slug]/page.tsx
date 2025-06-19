import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React, { cache } from 'react';
import { PostPage } from '@/page-templates/post';
import { RefreshRouteOnSave } from '@/shared/ui/RefreshRouteOnSave';

type Args = {
    params: Promise<{
        slug?: string;
    }>;
};

export default async function Page({ params: paramsPromise }: Args) {
    const { slug } = await paramsPromise;

    if (!slug) {
        notFound();
    }

    const page = await queryPageBySlug({ slug });

    return (
        <>
            <RefreshRouteOnSave />
            <PostPage {...page} />
        </>
    );
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: 'posts-pages',
        draft: true,
        limit: 1,
        pagination: false,
        where: {
            slug: {
                equals: slug,
            },
        },
    });

    return result.docs?.[0] || null;
});
