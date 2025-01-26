import { Welcome } from '@/shared/ui/Welcome';
import type { HomePage as HomePageProps } from '@/payload-types';

import bgImg from './img/bg.svg';

type HomeWelcomeProps = Pick<HomePageProps, 'welcome' | 'navigation'>;

export const HomeWelcome = ({ welcome, navigation }: HomeWelcomeProps) => {
    const { title, description } = welcome;

    return (
        <Welcome
            title={title}
            desc={description}
            isHomePage
            backgroundImage={bgImg.src}
            navigationList={{ navigation }}
        />
    );
};
