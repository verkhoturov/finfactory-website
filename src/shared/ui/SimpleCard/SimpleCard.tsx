import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link, { LinkProps } from 'next/link';

import styles from './SimpleCard.module.css';

interface SimpleCard {
    varinant?: 'default';
    desc: string;
    image: StaticImageData;
    additionalInfo?: string;
}

interface SimpleCardLink extends LinkProps {
    varinant?: 'link';
    desc: string;
    image: StaticImageData;
    additionalInfo?: string;
}

type SimpleCardProps = SimpleCard | SimpleCardLink;

export const SimpleCard = ({
    desc,
    image,
    varinant = 'default',
    additionalInfo,
    ...rest
}: SimpleCardProps) => {
    if (varinant === 'link' && 'href' in rest) {
        return (
            <Link {...rest}>
                <div className={styles.wrapper}>
                    <Image
                        className={styles.img}
                        src={image.src}
                        alt={desc}
                        width={image.width}
                        height={image.height}
                    />
                    <span className={styles.text}>{desc}</span>
                    {additionalInfo && (
                        <>
                            <br />
                            <span className={styles.info}>{additionalInfo}</span>
                        </>
                    )}
                </div>
            </Link>
        );
    }

    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.img}
                src={image.src}
                alt={desc}
                width={image.width}
                height={image.height}
            />
            <span className={styles.text}>{desc}</span>
        </div>
    );
};
