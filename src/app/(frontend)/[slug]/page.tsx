import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React, { cache } from 'react';
import { ProductPage } from '@/page-templates/product';

import { generateMeta } from '@/shared/utils/generateMeta';

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

    return <ProductPage {...page} />;
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { slug = '' } = await paramsPromise;

    const page = await queryPageBySlug({
        slug,
    });

    return generateMeta({ doc: page });
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: 'products-pages',
        // draft,
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
