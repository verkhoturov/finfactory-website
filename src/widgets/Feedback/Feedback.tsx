'use client';

import React from 'react';
import Image from 'next/image';
import { Layout } from '@/shared/ui/Layout';
import { Heading } from '@/shared/ui/Heading';

import { Slider } from '@/shared/ui/Slider';

import styles from './Feedback.module.css';

import photoImg from './photo.png';

const Slide = ({
    photoSrc,
    name,
    position,
    text,
    date,
}: {
    photoSrc: string;
    name: string;
    position: string;
    text: string;
    date: string;
}) => {
    return (
        <div className={styles.slide}>
            <div className={styles.img}>
                <Image src={photoSrc} alt={name} width={176} height={176} />
            </div>

            <div className={styles.content}>
                <div className={styles.title}>
                    <Heading.H2>{name}</Heading.H2>
                    <p className={styles.position}>{position}</p>
                </div>

                <div className={styles.text}>
                    <p>{text}</p>
                    <span className={styles.date}>{date}</span>
                </div>
            </div>
        </div>
    );
};

export const Feedback = () => {
    const slides = [
        <Slide
            photoSrc={photoImg.src}
            name={'Иван Иванов'}
            position="CEO Develop Metal"
            text="Компанда FINFACTORY помогла нам быстро и надежно решить вопросы финансирования. Их профессионализм и гибкость позволили нам сосредоточиться на развитии бизнеса, зная, что финансовая поддержка в надежных руках"
            date="11.11.24"
        />,
        <Slide
            photoSrc={photoImg.src}
            name={'Иван Иванов'}
            position="CEO Develop Metal"
            text="Компанда FINFACTORY помогла нам быстро и надежно решить вопросы финансирования. Их профессионализм и гибкость позволили нам сосредоточиться на развитии бизнеса, зная, что финансовая поддержка в надежных руках"
            date="11.11.24"
        />,
    ];

    return (
        <Layout.Container>
            <div className={styles.wrapper}>
                <Heading.H2>Отзывы и кейсы</Heading.H2>

                <div className={styles.sliderWrapper}>
                    <Slider content={slides} />
                </div>
            </div>
        </Layout.Container>
    );
};
