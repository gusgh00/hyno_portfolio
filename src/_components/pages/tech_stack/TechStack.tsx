"use client"
import { useEffect, useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import TechStack01 from "@components/pages/tech_stack/TechStack01";
import TechStack02 from '@components/pages/tech_stack/TechStack02';
import TechStack03 from '@components/pages/tech_stack/TechStack03';
import TechStack04 from '@components/pages/tech_stack/TechStack04';
import ScrollDown from '@components/animation/ScrollDown';
import useSwiperStore from '@store/swiperStore';
import 'swiper/css';
import 'swiper/css/pagination';
import useWidthStore from '@store/widthStore';

const TechStack = () => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const { isSwiper } = useSwiperStore()
    const { isWidth } = useWidthStore()

    useEffect(() => {
        if (isWidth > 1600) {
            if (isSwiper) {
                swiperRef.current?.swiper.enable()
            } else {
                swiperRef.current?.swiper.disable()
            }
        }
    }, [isSwiper, isWidth])

    return (
        <>
            <Swiper
                ref={swiperRef}
                direction={isWidth > 1600 ? 'vertical' : 'horizontal'}
                mousewheel={isWidth > 1600}
                simulateTouch={!(isWidth > 1600)}
                spaceBetween={30}
                slidesPerView={1}
                pagination={true}
                modules={[Mousewheel, Pagination]}
            >
                <SwiperSlide>
                    <TechStack01 />
                    {isWidth > 1600
                        ?
                        <ScrollDown />
                        :
                        null
                    }
                </SwiperSlide>
                <SwiperSlide><TechStack02 /></SwiperSlide>
                <SwiperSlide><TechStack03 /></SwiperSlide>
                <SwiperSlide><TechStack04 /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default TechStack