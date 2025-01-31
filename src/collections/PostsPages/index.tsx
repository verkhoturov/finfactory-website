import type { CollectionConfig } from 'payload';
import { authenticated } from '@/shared/utils/access/authenticated';
import { authenticatedOrPublished } from '@/shared/utils/access/authenticatedOrPublished';
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost';
import { populatePublishedAt } from '@/shared/utils/populatePublishedAt';

import {
    MetaDescriptionField,
    // MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields';

export const PostPages: CollectionConfig<'posts-pages'> = {
    slug: 'posts-pages',
    labels: {
        singular: 'Пост',
        plural: 'Страницы блога',
    },
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticatedOrPublished,
        update: authenticated,
    },
    defaultPopulate: {
        slug: true,
    },
    admin: {
        defaultColumns: ['title', 'slug', 'updatedAt'],
        useAsTitle: 'title',
        livePreview: {
            url: ({ data, req }) => {
                const protocol = req.host.includes('localhost') ? 'http:' : 'https:';
                return `${protocol}//${req.host}/preview/posts/${data.slug}`;
            },
        },
        preview: (data, { req }) => {
            return `${req.protocol}//${req.host}/preview/posts/${data.slug}`;
        },
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            index: true,
            label: 'Slug',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
                description: '(ссылка на страницу)',
            },
        },
        {
            name: 'preview_image',
            label: 'Фононовое изображение',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'title',
            label: 'Заголовок',
            type: 'textarea',
            required: true,
        },
        {
            name: 'article',
            label: 'Текст',
            type: 'richText',
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
                        /*
MetaImageField({
relationTo: 'media',
}),
*/
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
        drafts: {
            autosave: {
                interval: 400, // We set this interval for optimal live preview
            },
            schedulePublish: true,
        },
        maxPerDoc: 50,
    },
    hooks: {
        afterChange: [revalidatePost],
        beforeChange: [populatePublishedAt],
        afterDelete: [revalidateDelete],
    },
};
