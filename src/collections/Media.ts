import type { CollectionConfig } from 'payload';
import path from 'path';
import { getServerSideURL } from '@/shared/utils/getURL';

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
    upload: {
        staticDir: path.resolve(process.cwd(), 'public', 'uploads'),
    },

    hooks: {
        afterRead: [
            ({ doc }) => {
                // Изменяем URL файла
                if (doc.filename) {
                    const url = getServerSideURL();
                    doc.url = `${url}/uploads/${doc.filename}`;
                }
                return doc;
            },
        ],
    },
};
