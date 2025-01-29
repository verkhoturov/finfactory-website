import { Welcome } from '@/shared/ui/Welcome';
import { Suspense } from 'react';
import type { HomePage as HomePageType } from '@/payload-types';

import bgImg from './img/bg.svg';

type HomeWelcomeProps = Pick<HomePageType, 'welcome' | 'navigation'>;

export const HomeWelcome = ({ welcome, navigation }: HomeWelcomeProps) => {
    const { title, description } = welcome;
    return (
        <Suspense>
            <Welcome
                title={title}
                desc={description}
                isHomePage
                backgroundImage={bgImg.src}
                navigationList={{ navigation }}
                tabs={[]}
            />
        </Suspense>
    );
};
