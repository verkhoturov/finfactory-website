import { Welcome } from '@/shared/ui/Welcome';
import { Article } from '@/widgets/Article';

import type { PostsPage as PostsPageProps } from '@/payload-types';

export const PostPage = ({ title, article: data }: PostsPageProps) => {
    return (
        <>
            <Welcome title={title} tabs={[]} isBlog />
            <Article article={data} />
        </>
    );
};
