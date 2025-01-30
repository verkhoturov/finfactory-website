import { RichText } from '@payloadcms/richtext-lexical/react';
import { Layout } from '@/shared/ui/Layout';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

import styles from './Article.module.css';

type ArticleProps = {
    article: SerializedEditorState;
};

export const Article = ({ article: data }: ArticleProps) => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <RichText data={data} />
            </div>
        </Layout.Container>
    );
};
