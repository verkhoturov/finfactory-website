import type { GlobalConfig, Field } from 'payload';
import { authenticated } from '../shared/utils/access/authenticated';
import { authenticatedOrPublished } from '../shared/utils/access/authenticatedOrPublished';

import {
    MetaDescriptionField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields';

const NavLinkFields: Field[] = [
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
        name: 'icon',
        label: 'Иконка',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
];

const AdvantagesFields: Field[] = [
    {
        name: 'text',
        label: 'Текст',
        type: 'text',
        required: true,
    },
    {
        name: 'image',
        label: 'Изображение',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
];

const ProductsFields: Field[] = [
    {
        name: 'product',
        label: 'Продукт',
        type: 'group',
        fields: [
            {
                name: 'title',
                label: 'Заголовок',
                type: 'text',
                required: true,
            },

            {
                type: 'array',
                name: 'list',
                label: 'Подробнее',
                labels: {
                    singular: 'Пункт',
                    plural: 'Пункты',
                },
                minRows: 1,
                maxRows: 9,
                fields: [
                    {
                        name: 'text',
                        label: 'Текст',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'image',
                        label: 'Иконка',
                        type: 'upload',
                        relationTo: 'media',
                        required: true,
                    },
                ],
            },
        ],
    },
];

const SystemCapabilitiesFields: Field[] = [
    {
        name: 'image',
        label: 'Иконка',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
    {
        name: 'title',
        label: 'Заголовок',
        type: 'textarea',
        required: true,
    },
    {
        name: 'text',
        label: 'Описание',
        type: 'textarea',
        required: true,
    },
    {
        name: 'logos',
        label: 'Логотипы',
        type: 'array',
        admin: {
            description: 'Логотипы партнеров (не обязательно)',
        },
        fields: [
            {
                name: 'image',
                label: 'Лого',
                type: 'upload',
                relationTo: 'media',
            },
        ],
    },
];

const FAQListFields: Field[] = [
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
];

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
            type: 'group',
            fields: [
                {
                    name: 'link_1',
                    label: 'Ссылка 1',
                    type: 'group',
                    fields: NavLinkFields,
                },
                {
                    name: 'link_2',
                    label: 'Ссылка 2',
                    type: 'group',
                    fields: NavLinkFields,
                },
                {
                    name: 'link_3',
                    label: 'Ссылка 3',
                    type: 'group',
                    fields: NavLinkFields,
                },
                {
                    name: 'link_4',
                    label: 'Ссылка 4',
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
