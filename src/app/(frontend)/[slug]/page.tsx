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
 
export const dynamic = 'force-dynamic';

export default async function Page({ params: paramsPromise }: Args) {
    const { slug } = await paramsPromise;

    console.log("test SLUG", slug)

    if (slug) {
        if (slug === 'posts') {
            const posts = await queryPostsBySlug({ all: true });

            if(posts) return <BlogPage posts={posts} />;
            return notFound();
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


    console.log("test PAGE", page)

    if(page && posts) return <Home {...page} posts={posts} />;

    return notFound();
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
    try {

    const payload = await getPayload({ config: configPromise });

    const result = await payload.findGlobal({
        slug: 'home-page',
    });

    return result || null;
    } catch(e) {
        if (e instanceof Error) {
            console.error('Главная страница, ошибка:', e.message);
          } else {
            console.error('Главная страница, неизвестная ошибка:', e);
          }
          throw e; 
    }
};

const queryPostsBySlug = async ({ all }: { all?: boolean }) => {
    try {
        const payload = await getPayload({ config: configPromise });

        const result = await payload.find({
            collection: 'posts-pages',
            limit: all ? 1000 : 3,
        });
    
        return result.docs || null;
    } catch(e) {
        if (e instanceof Error) {
            console.error('Ошибка:', e.message);
          } else {
            console.error('Неизвестная ошибка:', e);
          }
          throw e; 
    }
};
