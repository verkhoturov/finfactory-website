import { notFound } from 'next/navigation';
import { RefreshRouteOnSave } from '@/shared/ui/RefreshRouteOnSave';
import configPromise from '@payload-config';
import React from 'react';
import { Home } from '@/page-templates/home';
import { getPayload } from 'payload';

export default async function Page() {
    const page = await queryHomePageDraft();

    if (!page) {
        return notFound();
    }

    return (
        <>
            <RefreshRouteOnSave />
            <Home {...page} />
        </>
    );
}

const queryHomePageDraft = async () => {
    const payload = await getPayload({ config: configPromise });

    const result = await payload.findGlobal({
        slug: 'home-page',
        draft: true,
    });

    return result || null;
};
