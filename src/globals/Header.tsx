import type { GlobalConfig } from 'payload';
import { authenticated } from '@/shared/utils/access/authenticated';
import { authenticatedOrPublished } from '@/shared/utils/access/authenticatedOrPublished';

export const Header: GlobalConfig = {
    slug: 'header',
    label: 'Меню',
    access: {
        read: authenticatedOrPublished,
        update: authenticated,
    },
    fields: [],
};
