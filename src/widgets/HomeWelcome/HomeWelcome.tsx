import { Welcome } from '@/shared/ui/Welcome';

import bgImg from './img/bg.svg';

export const HomeWelcome = () => {
    return (
        <Welcome
            title={`Открытая\nтехнологическая\nплатформа`}
            desc={`для кредитования, факторинга,\nдинамического дисконтирования\nи других фин. инструментов`}
            isHomePage
            backgroundImage={bgImg.src}
        />
    );
};
