export const revalidate = 0;

import { notFound } from 'next/navigation';
import { Home } from '@/page-templates/home';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export default async function Page() {
  const payload = await getPayload({ config: configPromise });

  const page = await payload.findGlobal({
    slug: 'home-page',
  });

  if (!page) {
    return notFound();
  }

  return <Home {...page} />;
}
