import type { Metadata } from 'next';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React from 'react';
import { Home } from '@/page-templates/home';

import type { ProductsPage as ProductsPageType, HomePage as HomePageType } from '@/payload-types';

import { generateMeta } from '@/shared/utils/generateMeta';

type Page = ProductsPageType | HomePageType;

export default async function Page() {
    const [page, posts] = await Promise.all([queryHomePage(), queryPostsBySlug({ all: false })]);

    return <Home {...page} posts={posts} />;
}

// ISR: Генерация статических параметров (Next.js создаёт HTML при билде)
export async function generateStaticParams() {
    const payload = await getPayload({ config: configPromise });

    const pages = await payload.find({
        collection: 'products-pages',
        limit: 100, // Ограничение на количество страниц для предгенерации
    });

    return pages.docs.map((page) => ({
        slug: page.slug,
    }));
}

// Генерация SEO-мета с ISR
export async function generateMetadata(): Promise<Metadata> {
    const page = await queryHomePage();

    return generateMeta({ doc: page });
}

const queryHomePage = async () => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.findGlobal({
        slug: 'home-page',
    });

    return result || null;
};

const queryPostsBySlug = async ({ all }: { all?: boolean }) => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: 'posts-pages',
        limit: all ? 1000 : 3,
    });

    return result.docs || null;
};
