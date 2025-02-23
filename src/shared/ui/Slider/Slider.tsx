'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './Slider.module.css';

interface SliderProps {
    slidesPerView?: number;
    isLoop?: boolean;
    content: React.ReactNode[];
}

export const Slider = ({ slidesPerView = 1, isLoop = true, content }: SliderProps) => {
    const swiperRef = React.useRef<SwiperType>(null);
    return (
        <div className={styles.wrapper}>
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                loop={isLoop}
                modules={[Navigation, Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                pagination={true}
            >
                {content.map((item, index) => (
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
            </Swiper>

            <button className={styles.prev} onClick={() => swiperRef.current?.slidePrev()}>
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none">
                    <path d="M12 1L2 11L12 21" stroke="black" strokeWidth="2" />
                </svg>
            </button>

            <button className={styles.next} onClick={() => swiperRef.current?.slideNext()}>
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none">
                    <path d="M1 1L11 11L1 21" stroke="black" strokeWidth="2" />
                </svg>
            </button>
        </div>
    );
};
