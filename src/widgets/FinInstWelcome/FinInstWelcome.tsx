import { Welcome } from '@/shared/ui/Welcome';

import bgImg from './img/bg.svg';
import { Icon } from './img/icon';

export const FinInstWelcome = () => {
    return (
        <Welcome
            subtitle="Продукты для"
            title={`Финансовых\nинститутов`}
            desc={`для кредитования, факторинга,\nдинамического дисконтирования\nи других фин. инструментов`}
            backgroundImage={bgImg.src}
            icon={<Icon />}
        />
    );
};
