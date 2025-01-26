import type { Metadata } from 'next';

import type { ProductsPage as ProductsPageType, HomePage as HomePageType } from '@/payload-types';

// import { mergeOpenGraph } from './mergeOpenGraph'

type Page = ProductsPageType | HomePageType;

export const generateMeta = async (args: { doc: Partial<Page> | null }): Promise<Metadata> => {
    const { doc } = args;

    // const ogImage = getImageURL(doc?.meta?.image)

    const title = doc?.meta?.title ? doc?.meta?.title : 'Finfactory';

    return {
        description: doc?.meta?.description,
        /*
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    */
        title,
    };
};
