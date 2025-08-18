"use client"
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/types';
import TechStack01 from "@components/pages/tech_stack/TechStack01";
import TechStack02 from '@components/pages/tech_stack/TechStack02';
import TechStack03 from '@components/pages/tech_stack/TechStack03';
import TechStack04 from '@components/pages/tech_stack/TechStack04';
import ScrollDown from '@components/animation/ScrollDown';
// import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';
import useSwiperStore from '@store/swiperStore';

const TechStack = () => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const { isSwiper } = useSwiperStore()

    useEffect(() => {
        if (isSwiper) {
            swiperRef.current?.swiper.enable()
        } else {
            swiperRef.current?.swiper.disable()
        }
    }, [isSwiper])

    return (
        <>
            <Swiper
                ref={swiperRef}
                direction={'vertical'}
                mousewheel={true}
                simulateTouch={false}
                spaceBetween={30}
                slidesPerView={1}
                pagination={true}
                modules={[Mousewheel, Pagination]}
            >
                <SwiperSlide><TechStack01 /><ScrollDown /></SwiperSlide>
                <SwiperSlide><TechStack02 /></SwiperSlide>
                <SwiperSlide><TechStack03 /></SwiperSlide>
                <SwiperSlide><TechStack04 /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default TechStack