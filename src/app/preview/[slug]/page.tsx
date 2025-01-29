import { notFound } from 'next/navigation';
import { RefreshRouteOnSave } from '@/shared/ui/RefreshRouteOnSave';
import configPromise from '@payload-config';
import React from 'react';
import { ProductPage } from '@/page-templates/product';
import { getPayload } from 'payload';

type Args = {
    params: Promise<{
        slug?: string;
    }>;
};

export default async function Page({ params: paramsPromise }: Args) {
    const { slug } = await paramsPromise;

    if (!slug) {
        return notFound();
    }

    const page = await queryProductsPageDraft(slug);

    if (!page) {
        return notFound();
    }

    return (
        <>
            <RefreshRouteOnSave />
            <ProductPage {...page} />
        </>
    );
}

const queryProductsPageDraft = async (slug: string) => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: 'products-pages',
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
};
