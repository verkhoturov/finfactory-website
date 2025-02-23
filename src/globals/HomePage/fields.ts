import type { Field } from 'payload';

export const NavLinkFields: Field[] = [
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

export const AdvantagesFields: Field[] = [
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

export const ProductsFields: Field[] = [
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

export const SystemCapabilitiesFields: Field[] = [
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

export const FAQListFields: Field[] = [
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

export const FeedbackListFields: Field[] = [
    {
        name: 'name',
        label: 'Имя',
        type: 'text',
        required: true,
    },
    {
        name: 'position',
        label: 'Должность',
        type: 'text',
    },
    {
        name: 'photo',
        label: 'Фото',
        type: 'upload',
        relationTo: 'media',
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
    {
        name: 'date',
        label: 'Дата',
        type: 'date',
    },
];
