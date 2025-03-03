// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb';
// import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
// import nodemailer from 'nodemailer';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
// import sharp from 'sharp'
import { ru } from '@payloadcms/translations/languages/ru';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { ProductsPages } from './collections/ProductsPages';
import { PostPages } from './collections/PostsPages';

import { HomePage } from './globals/HomePage';
import { Header } from './globals/Header';
import { Footer } from './globals/Footer';

import type {
    ProductsPage as ProductsPageType,
    HomePage as HomePageType,
    PostsPage as PostsType,
} from '@/payload-types';
import { seoPlugin } from '@payloadcms/plugin-seo';
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types';

import { getServerSideURL } from '@/shared/utils/getURL';

type Page = ProductsPageType | HomePageType | PostsType;

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
    if ('title' in doc) {
        return doc.title ? `${doc.title} | Finfactory` : 'Finfactory';
    }
    return 'Finfactory';
};

const generateURL: GenerateURL<Page> = ({ doc, collectionSlug }) => {
    const url = getServerSideURL();

    if (collectionSlug === 'posts-pages' && 'slug' in doc) {
        return `${url}/posts/${doc.slug}`;
    }

    if ('slug' in doc) {
        return doc?.slug ? `${url}/${doc.slug}` : url;
    }

    return url;
};

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
        livePreview: {
            breakpoints: [
                {
                    label: 'Mobile',
                    name: 'mobile',
                    width: 375,
                    height: 667,
                },
                {
                    label: 'Tablet',
                    name: 'tablet',
                    width: 768,
                    height: 1024,
                },
                {
                    label: 'Desktop',
                    name: 'desktop',
                    width: 1440,
                    height: 900,
                },
            ],
        },
    },
    collections: [ProductsPages, PostPages, Users, Media],
    globals: [HomePage, Header, Footer],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    // sharp,
    plugins: [
        seoPlugin({
            generateTitle,
            generateURL,
        }),
    ],
    i18n: {
        supportedLanguages: { ru },
        fallbackLanguage: 'en',
    },
    upload: {
        limits: {
            fileSize: 5000000, // 5MB, written in bytes
        },
    },
    /*
    email: nodemailerAdapter({
        defaultFromAddress: process.env.INFO_EMAIL || '',
        defaultFromName: 'Payload',
        transport: nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        }),
    }),
    */
});
