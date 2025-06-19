import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React, { cache } from 'react';
import { ProductPage } from '@/page-templates/product';
import { Home } from '@/page-templates/home';

import { generateMeta } from '@/shared/utils/generateMeta';

type Args = {
    params: Promise<{
        slug?: string;
    }>;
};

// ISR: Страница обновляется раз в 60 секунд
export const revalidate = 60;

export default async function Page({ params: paramsPromise }: Args) {
    const { slug } = await paramsPromise;

    if (slug) {
        const page = await queryPageBySlug({ slug });

        if (!page) {
            return notFound();
        }

        return <ProductPage {...page} />;
    }

    const page = await queryHomePage();

    return <Home {...page} />;
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

const queryHomePage = cache(async () => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.findGlobal({
        slug: 'home-page',
    });

    return result || null;
});