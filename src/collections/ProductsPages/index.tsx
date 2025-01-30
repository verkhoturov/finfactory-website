import type { CollectionConfig, Field } from 'payload';
import { authenticated } from '@/shared/utils/access/authenticated';
import { authenticatedOrPublished } from '@/shared/utils/access/authenticatedOrPublished';
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage';
import { populatePublishedAt } from '@/shared/utils/populatePublishedAt';

import {
    MetaDescriptionField,
    // MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields';

const profitsFields: Field[] = [
    {
        name: 'title',
        label: 'Заголовок',
        type: 'textarea',
    },
    {
        type: 'array',
        name: 'points',
        label: 'Пункты',
        labels: {
            singular: 'Пункт',
            plural: 'Пункты',
        },
        fields: [
            {
                name: 'text',
                label: 'Текст',
                type: 'textarea',
            },
        ],
    },
];

export const ProductsPages: CollectionConfig<'products-pages'> = {
    slug: 'products-pages',
    labels: {
        singular: 'Страницы',
        plural: 'Страницы продуктов',
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
                return `${protocol}//${req.host}/preview/${data.slug}`;
            },
        },
        preview: (data, { req }) => {
            return `${req.protocol}//${req.host}/preview/${data.slug}`;
        },
    },
    fields: [
        {
            name: 'title',
            label: 'Имя страницы',
            type: 'text',
            required: true,
        },
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
            name: 'welcome',
            label: 'Приветствие',
            type: 'group',
            fields: [
                {
                    name: 'uppertitle',
                    label: 'Надзаголовок',
                    type: 'text',
                },
                {
                    name: 'title',
                    label: 'Заголовок',
                    type: 'textarea',
                    required: true,
                },
                {
                    name: 'subtitle',
                    label: 'Подзаголовок',
                    type: 'text',
                },
                {
                    name: 'description',
                    label: 'Описание',
                    type: 'textarea',
                },
                {
                    name: 'icon',
                    label: 'Иконка',
                    type: 'upload',
                    relationTo: 'media',
                },
                {
                    name: 'bg_image',
                    label: 'Фононовое изображение',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'tabs',
            label: 'Вкладки',
            type: 'array',
            labels: {
                singular: 'Вкладка',
                plural: 'Вкладки',
            },
            maxRows: 6,
            fields: [
                {
                    name: 'tab',
                    label: '',
                    type: 'group',
                    fields: [
                        {
                            name: 'text',
                            label: 'Текст',
                            type: 'textarea',
                            required: true,
                        },
                        {
                            name: 'link',
                            label: 'Ссылка',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'content',
                            label: 'Контент',
                            type: 'group',
                            fields: [
                                {
                                    name: 'title',
                                    label: 'Общее описание',
                                    type: 'textarea',
                                    admin: {
                                        rows: 5,
                                    },
                                },
                                {
                                    name: 'block_1',
                                    label: 'Верхний блок',
                                    type: 'group',
                                    fields: [
                                        {
                                            name: 'title',
                                            label: 'Заголовок',
                                            type: 'textarea',
                                        },
                                        {
                                            name: 'text',
                                            label: 'Текст',
                                            type: 'textarea',
                                            admin: {
                                                rows: 5,
                                            },
                                        },
                                    ],
                                },
                                {
                                    name: 'block_2',
                                    label: 'Нижний блок',
                                    type: 'group',
                                    fields: [
                                        {
                                            name: 'title',
                                            label: 'Заголовок',
                                            type: 'textarea',
                                        },
                                        {
                                            name: 'text',
                                            label: 'Текст',
                                            type: 'textarea',
                                            admin: {
                                                rows: 5,
                                            },
                                        },
                                    ],
                                },
                                {
                                    name: 'profits',
                                    label: 'Выгоды',
                                    type: 'group',
                                    fields: [
                                        {
                                            name: 'title',
                                            label: 'Заголовок',
                                            type: 'textarea',
                                        },
                                        {
                                            type: 'row',
                                            fields: [
                                                {
                                                    name: 'profit_1',
                                                    label: '',
                                                    type: 'group',
                                                    fields: profitsFields,
                                                },
                                                {
                                                    name: 'profit_2',
                                                    label: '',
                                                    type: 'group',
                                                    fields: profitsFields,
                                                },
                                            ],
                                        },
                                        {
                                            type: 'row',
                                            fields: [
                                                {
                                                    name: 'profit_3',
                                                    label: '',
                                                    type: 'group',
                                                    fields: profitsFields,
                                                },
                                                {
                                                    name: 'profit_4',
                                                    label: '',
                                                    type: 'group',
                                                    fields: profitsFields,
                                                },
                                            ],
                                        },
                                    ],
                                },

                                {
                                    name: 'faq',
                                    label: 'FAQ',
                                    type: 'group',
                                    fields: [
                                        {
                                            name: 'title',
                                            label: 'Заголовок',
                                            type: 'textarea',
                                        },
                                        {
                                            type: 'array',
                                            name: 'list',
                                            label: 'Вопросы',
                                            labels: {
                                                singular: 'Вопрос',
                                                plural: 'Вопросы',
                                            },
                                            fields: [
                                                {
                                                    name: 'title',
                                                    label: 'Вопрос',
                                                    type: 'text',
                                                    required: true,
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Ответ',
                                                    type: 'textarea',
                                                    required: true,
                                                    admin: {
                                                        rows: 5,
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
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
        afterChange: [revalidatePage],
        beforeChange: [populatePublishedAt],
        afterDelete: [revalidateDelete],
    },
};
