import React from 'react';
import Image from 'next/image';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';

import styles from './SystemCapabilities.module.css';
import { UnionIcon, FlexIcon, IntegrationIcon, DocIcon, PeopleIcon } from './icons';
import oneAssImg from './img/1ass.svg';
import oracleImg from './img/oracle.svg';
import sapImg from './img/sap.svg';

const Card = ({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            {children}
        </div>
    );
};

export const SystemCapabilities = () => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>Возможности системы FINFACTORY</Heading.H2>

                <div className={styles.row}>
                    <Card icon={<UnionIcon />}>
                        <Heading.H3>Единое унифицированное решение</Heading.H3>
                        <p>
                            Все банковские и небанковские источники фондирования в единой системе.
                            Подключите их все или выберите только продукты, соответствующие вашей
                            риск-политике
                        </p>
                    </Card>

                    <Card icon={<FlexIcon />}>
                        <Heading.H3>Гибкая настройка политики финансовых сервисов</Heading.H3>
                        <p>
                            Управляйте линейкой подключенных продуктов, настраивайте политика, права
                            и роли по установлению лимитов, приоритизации оплат, автоматическому
                            исполнению
                        </p>
                    </Card>
                    <Card icon={<IntegrationIcon />}>
                        <Heading.H3>Бесшовная интеграция</Heading.H3>
                        <p>
                            Платформа легко интегрируется с самыми популярными ERP-системами SAP,
                            1C, Oracle. Платформа может быть развернута в облаке FINFACTORY или
                            развернута и брендирована в контуре заказчика.
                        </p>
                        <br />
                        <div className={styles.logos}>
                            <Image src={oneAssImg} width={32} height={22} alt="1c" />
                            <Image src={oracleImg} width={61} height={22} alt="oracle" />
                            <Image src={sapImg} width={42} height={21} alt="sap" />
                        </div>
                    </Card>
                    <Card icon={<DocIcon />}>
                        <Heading.H3>Электронный документооборот</Heading.H3>
                        <p>
                            Мгновенно обменивайтесь электронными документами, настраивайте
                            стандартные формы соглашений и политики акцептования и подписи
                        </p>
                    </Card>
                    <Card icon={<PeopleIcon />}>
                        <Heading.H3>Автоматизированный онбординг ваших контрагентов</Heading.H3>
                        <p>
                            Устанавливайте свои правила онбординга, настраивайте список
                            запрашиваемых у контрагентов документов для KYC, соответствующий
                            политике вашей компании.
                        </p>
                    </Card>
                </div>
            </div>
        </Layout.Container>
    );
};
