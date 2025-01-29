import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
// import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React, { cache } from 'react';
import { Home } from '@/page-templates/home';
import { ProductPage } from '@/page-templates/product';
// import { homeStatic } from '@/endpoints/seed/home-static'

import type { ProductsPage as ProductsPageType, HomePage as HomePageType } from '@/payload-types';

/*
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero' 
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
*/

import { generateMeta } from '@/shared/utils/generateMeta';

type Page = ProductsPageType | HomePageType;

type Args = {
    params: Promise<{
        slug?: string;
    }>;
};

export default async function Page({ params: paramsPromise }: Args) {
    const { slug } = await paramsPromise;

    if (slug) {
        const page = await queryPageBySlug({
            slug,
        });

        if (!page) {
            return notFound();
        }

        //  console.log('products page', page);

        return <ProductPage {...page} />;
    }

    const page = await queryHomePage();

    /*
  if (!page) {
    return <PayloadRedirects url={url} />
  }
  */

    // const { hero, layout } = page

    // return (
    // <article>
    // <PageClient />
    // {/* Allows redirects for valid pages too */}
    /// <PayloadRedirects disableNotFound url={url} />

    // {/* draft && <LivePreviewListener /> */}

    // <RenderHero {...hero} />
    // <RenderBlocks blocks={layout} />
    // </article>
    // )

    // console.log('home page', page);

    return <Home {...page} />;
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { slug = '' } = await paramsPromise;
    let page: Page | null;

    if (slug) {
        page = await queryPageBySlug({
            slug,
        });
    } else {
        page = await queryHomePage();
    }

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
