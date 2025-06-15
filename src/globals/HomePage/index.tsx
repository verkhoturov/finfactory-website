import type { GlobalConfig } from 'payload';
import { authenticated } from '@/shared/utils/access/authenticated';
import { authenticatedOrPublished } from '@/shared/utils/access/authenticatedOrPublished';

import {
    MetaDescriptionField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields';

import {
    NavLinkFields,
    AdvantagesFields,
    ProductsFields,
    FAQListFields,
    SystemCapabilitiesFields,
    FeedbackListFields,
} from './fields';

export const HomePage: GlobalConfig = {
    slug: 'home-page',
    label: 'Главная страница',
    access: {
        read: authenticatedOrPublished,
        update: authenticated,
    },
    fields: [
        {
            name: 'welcome',
            label: 'Приветствие',
            type: 'group',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'title',
                            label: 'Заголовок',
                            type: 'textarea',
                            required: true,
                            admin: {
                                rows: 5,
                            },
                        },
                        {
                            name: 'description',
                            label: 'Описание',
                            type: 'textarea',
                            admin: {
                                rows: 5,
                            },
                        },
                    ],
                },
            ],
        },
        {
            name: 'navigation',
            label: 'Навигация',
            type: 'array',
            maxRows: 4,
            fields: [
                {
                    name: 'link',
                    label: 'Ссылка',
                    type: 'group',
                    fields: NavLinkFields,
                },
            ],
        },
        {
            name: 'advantages',
            label: 'Преимущества',
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
                    label: 'Список',
                    labels: {
                        singular: 'Пункт',
                        plural: 'Пункты',
                    },
                    minRows: 3,
                    maxRows: 9,
                    fields: AdvantagesFields,
                },
            ],
        },
        {
            name: 'products',
            label: 'Продукты',
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
                    label: 'Список',
                    labels: {
                        singular: 'Продукт',
                        plural: 'Продукты',
                    },
                    minRows: 1,
                    maxRows: 9,
                    fields: ProductsFields,
                },
            ],
        },
        {
            name: 'partners',
            label: 'Партнеры',
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
                    label: 'Список',
                    labels: {
                        singular: 'Лого',
                        plural: 'Лого',
                    },
                    minRows: 1,
                    fields: [
                        {
                            name: 'image',
                            label: 'Изображение',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                    ],
                },
            ],
        },
        {
            name: 'system_capabilities',
            label: 'Возможности',
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
                    label: 'Список',
                    labels: {
                        singular: 'Возможность',
                        plural: 'Возможности',
                    },
                    minRows: 1,
                    maxRows: 9,
                    fields: SystemCapabilitiesFields,
                },
            ],
        },
        {
            name: 'feedback',
            label: 'Отзывы',
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
                    label: 'Список',
                    labels: {
                        singular: 'Отзыв',
                        plural: 'Отзывы',
                    },
                    minRows: 1,
                    fields: FeedbackListFields,
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
                    minRows: 1,
                    fields: FAQListFields,
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
                interval: 375,
            },
        },
        max: 50,
    },
    admin: {
        livePreview: {
            url: ({ req }) => {
                const protocol = req.host.includes('localhost') ? 'http:' : 'https:';
                return `${protocol}//${req.host}/preview/home`;
            },
        },
        preview: () => `http:${process.env.WEBSITE_URL}/preview/home`,
    },
};
