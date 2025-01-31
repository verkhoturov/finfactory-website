import { Welcome } from '@/shared/ui/Welcome';
import { Blog } from '@/widgets/Blog';

import type { PostsPage as Posts } from '@/payload-types';

export const BlogPage = ({ posts }: { posts: Posts[] }) => {
    return (
        <>
            <Welcome title={'Блог и статьи'} tabs={[]} isBlog />
            <Blog posts={posts} allPostsView />
        </>
    );
};
