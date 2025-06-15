import React from 'react';
import Image from 'next/image';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';
import { Slider } from '@/shared/ui/Slider';

import type { HomePage as HomePageType, Media } from '@/payload-types';

import styles from './Feedback.module.css';

function formatDateToDDMMYY(isoString: string) {
    // Создаем объект Date из исходной строки
    const date = new Date(isoString);

    // Получаем день, месяц, год
    const day = String(date.getDate()).padStart(2, '0'); // '01' ... '31'
    const month = String(date.getMonth() + 1).padStart(2, '0'); // '01' ... '12'
    const year = String(date.getFullYear()).slice(-2); // '24'

    // Формируем итоговую строку в формате "дд.мм.гг"
    return `${day}.${month}.${year}`;
}

const Slide = ({
    photoSrc,
    name,
    position,
    text,
    date,
}: {
    photoSrc: string;
    name: string;
    position?: string;
    text: string;
    date?: string;
}) => {
    return (
        <div className={styles.slide}>
            <div className={styles.img}>
                <Image src={photoSrc} alt={name} width={176} height={176} />
            </div>

            <div className={styles.content}>
                <div className={styles.title}>
                    <Heading.H2>{name}</Heading.H2>
                    {position && <p className={styles.position}>{position}</p>}
                </div>

                <div className={styles.text}>
                    <p>{text}</p>
                    {date && <span className={styles.date}>{date}</span>}
                </div>
            </div>
        </div>
    );
};

type FeedbackProps = Pick<HomePageType, 'feedback'>;

export const Feedback = ({ feedback }: FeedbackProps) => {
    const slides = feedback?.list?.map((item, index) => (
        <Slide
            key={index}
            photoSrc={(item.photo as Media)?.url || ''}
            name={item.name}
            position={item.position || ''}
            text={item.text}
            date={item.date ? formatDateToDDMMYY(item.date) : ''}
        />
    ));

    if (!slides || slides.length === 0) return null;

    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                {feedback?.title && <Heading.H2>{feedback.title}</Heading.H2>}

                <div className={styles.sliderWrapper}>
                    <Slider content={slides} />
                </div>
            </div>
        </Layout.Container>
    );
};
