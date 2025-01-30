import cn from 'classnames';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { SimpleCard } from '@/shared/ui/SimpleCard';

import styles from './Blog.module.css';

import type { PostsPage as Posts, Media } from '@/payload-types';

interface BlogProps {
    posts: Posts[];
}

export const Blog = ({ posts }: BlogProps) => {
    if (!posts || posts.length === 0) return null;

    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>Блог и статьи</Heading.H2>

                <div
                    className={cn(styles.row, {
                        [styles.small]: posts.length < 3,
                    })}
                >
                    {posts?.map((item, index) => (
                        <SimpleCard
                            key={index}
                            varinant="link"
                            href={`/posts/${item.slug}`}
                            image={{
                                src: (item.preview_image as Media).url || '',
                                width: (item.preview_image as Media).width || 100,
                                height: (item.preview_image as Media).height || 100,
                            }}
                            desc={item.title}
                        />
                    ))}
                </div>
            </div>
        </Layout.Container>
    );
};
