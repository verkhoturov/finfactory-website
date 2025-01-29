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
    fields: [
        {
            name: 'nav',
            label: 'Навигация',
            labels: {
                singular: 'Пункт',
                plural: 'Пункты',
            },
            type: 'array',
            maxRows: 5,
            minRows: 1,
            admin: {
                description: '(меню скрыто на главной странице)',
            },
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
        {
            name: 'buttons',
            label: 'Кнопки',
            type: 'array',
            maxRows: 2,
            labels: {
                singular: 'Кнопка',
                plural: 'Кнопку',
            },
            fields: [
                {
                    name: 'button',
                    label: 'Кнопка',
                    type: 'group',
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
