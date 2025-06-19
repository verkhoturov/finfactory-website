import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import React from 'react';
import { Home } from '@/page-templates/home';
import { ProductPage } from '@/page-templates/product';
import { BlogPage } from '@/page-templates/blog';

import type { ProductsPage as ProductsPageType, HomePage as HomePageType } from '@/payload-types';

import { generateMeta } from '@/shared/utils/generateMeta';

type Page = ProductsPageType | HomePageType;

type Args = {
    params: Promise<{ slug?: string }>;
};

// ISR: Страница обновляется раз в 60 секунд
export const revalidate = 60;

export default async function Page({ params: paramsPromise }: Args) {
    const { slug } = await paramsPromise;

    if (slug) {
        if (slug === 'posts') {
            const posts = await queryPostsBySlug({ all: true });
            return <BlogPage posts={posts} />;
        }

        const [page, posts] = await Promise.all([
            queryPageBySlug({ slug }),
            queryPostsBySlug({ all: false }),
        ]);

        if (!page) {
            return notFound();
        }

        return <ProductPage {...page} posts={posts} />;
    }

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
export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
    const { slug = '' } = await paramsPromise;

    let page: Page | null;

    if (slug) {
        page = await queryPageBySlug({ slug });
    } else {
        page = await queryHomePage();
    }

    return generateMeta({ doc: page });
}

// Функции для получения данных
const queryPageBySlug = async ({ slug }: { slug: string }) => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
        collection: 'products-pages',
        limit: 1,
        pagination: false,
        where: {
            slug: { equals: slug },
        },
    });

    return result.docs?.[0] || null;
};

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
