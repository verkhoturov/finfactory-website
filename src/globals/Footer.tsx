import type { GlobalConfig } from 'payload';
import { authenticated } from '@/shared/utils/access/authenticated';
import { authenticatedOrPublished } from '@/shared/utils/access/authenticatedOrPublished';

export const Footer: GlobalConfig = {
    slug: 'footer',
    label: 'Подвал',
    access: {
        read: authenticatedOrPublished,
        update: authenticated,
    },
    fields: [
        {
            name: 'nav',
            label: 'Навигация',
            labels: {
                singular: 'Пункт',
                plural: 'Пункты',
            },
            type: 'array',
            maxRows: 4,
            minRows: 1,
            fields: [
                {
                    name: 'list',
                    label: 'Список',
                    type: 'group',
                    fields: [
                        {
                            name: 'title',
                            label: 'Заголовок',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'links',
                            label: 'Ссылки',
                            labels: {
                                singular: 'Ссылка',
                                plural: 'Ссылки',
                            },
                            type: 'array',
                            minRows: 1,
                            fields: [
                                {
                                    name: 'text',
                                    label: 'Текст',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'link',
                                    label: 'Ссылка',
                                    type: 'text',
                                    required: true,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'social',
            label: 'Социальные сети',
            type: 'array',
            labels: {
                singular: 'Ссылка',
                plural: 'Ссылки',
            },
            fields: [
                {
                    name: 'network',
                    label: 'Сеть',
                    type: 'group',
                    fields: [
                        {
                            name: 'link',
                            label: 'Ссылка',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'image',
                            label: 'Лого',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                        },
                        {
                            name: 'name',
                            label: 'Название',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
        {
            name: 'info',
            label: 'Информация',
            type: 'text',
        },
        {
            name: 'additional_info',
            label: 'Дополнительная информация',
            type: 'text',
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
        preview: (_, { req }) => `${req.protocol}//${req.host}/preview/home`,
    },
};
