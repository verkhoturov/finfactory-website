import { Welcome } from '@/shared/ui/Welcome';

import bgImg from './img/bg.svg';
import { Icon } from './img/icon';

export const AgentsWelcome = () => {
    return (
        <Welcome
            subtitle="Продукты для"
            title={`Агентов`}
            desc={`для кредитования, факторинга,\nдинамического дисконтирования\nи других фин. инструментов`}
            backgroundImage={bgImg.src}
            icon={<Icon />}
        />
    );
};
