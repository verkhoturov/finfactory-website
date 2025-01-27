import React from 'react';
import Image from 'next/image';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';

import type { HomePage as HomePageType, Media } from '@/payload-types';

import styles from './SystemCapabilities.module.css';

const Card = ({ children, icon }: { children: React.ReactNode; icon: Media }) => {
    return (
        <div className={styles.card}>
            <div
                className={styles.icon}
                style={{ backgroundImage: icon.url ? `url(${icon.url})` : 'none' }}
            ></div>
            {children}
        </div>
    );
};

type SystemCapabilitiesProps = Pick<HomePageType, 'system_capabilities'>;

export const SystemCapabilities = ({ system_capabilities }: SystemCapabilitiesProps) => {
    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                {system_capabilities?.title && <Heading.H2>{system_capabilities.title}</Heading.H2>}

                <div className={styles.row}>
                    {system_capabilities?.list?.map(({ title, text, image, logos, id }, index) => (
                        <Card icon={image as Media} key={id || index}>
                            <Heading.H3>{title}</Heading.H3>
                            <p>{text}</p>
                            {logos && logos.length > 0 && (
                                <>
                                    <br />
                                    <div className={styles.logos}>
                                        {logos.map(({ image }, index) => {
                                            if (!image) return null;
                                            const img = image as Media;
                                            return (
                                                <Image
                                                    key={index}
                                                    src={img.url || ''}
                                                    width={img.width || 30}
                                                    height={img.height || 22}
                                                    alt=""
                                                />
                                            );
                                        })}
                                    </div>
                                </>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </Layout.Container>
    );
};
