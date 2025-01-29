import { Welcome } from '@/shared/ui/Welcome';
import { Suspense } from 'react';

import bgImg from './img/bg.svg';
import { Icon } from './img/icon';

export const CorpHoldWelcome = () => {
    return (
        <Suspense>
            <Welcome
                subtitle="Продукты для"
                title={`корпораций\nи холдингов`}
                desc={`для кредитования, факторинга,\nдинамического дисконтирования\nи других фин. инструментов`}
                backgroundImage={bgImg.src}
                icon={<Icon />}
            />
        </Suspense>
    );
};
