import type { GlobalConfig } from 'payload';
import { authenticated } from '../access/authenticated';
import { authenticatedOrPublished } from '../access/authenticatedOrPublished';

import {
    MetaDescriptionField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields';

export const HomePage: GlobalConfig = {
    slug: 'home-page',
    label: 'Главная',
    access: {
        read: authenticatedOrPublished,
        update: authenticated,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            type: 'tabs',
            tabs: [
                {
                    name: 'meta',
                    label: 'SEO',
                    fields: [
                        OverviewField({
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                            // imagePath: 'meta.image',
                        }),
                        MetaTitleField({
                            hasGenerateFn: true,
                        }),
                        MetaDescriptionField({}),
                        PreviewField({
                            hasGenerateFn: true,
                            titlePath: 'meta.title',
                            descriptionPath: 'meta.description',
                        }),
                    ],
                    admin: {
                        position: 'sidebar',
                    },
                },
            ],
        },
    ],
    versions: {
        drafts: true,
        max: 10,
    },
    /*
    admin: {
        livePreview: {
            url: ({ data, req }) => {
                console.log('url data', data);
                return `${req.protocol}//${req.host}/preview?home`;
            },
        },
        preview: (data, { req }) => {
            console.log('preview data', data);
            return `${req.protocol}//${req.host}/preview?home`;
        },
    },
    */
};
