"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import TechStack01 from "@components/pages/tech_stack/TechStack01";
import TechStack02 from './TechStack02';
import TechStack03 from '@components/pages/tech_stack/TechStack03';

const TechStack = () => {
    return (
        <>
            <Swiper
                direction={'vertical'}
                mousewheel={true}
                simulateTouch={false}
                // observer={true}
                // observeParents={true}
                // observeSlideChildren={true}
                spaceBetween={30}
                slidesPerView={1}
                modules={[Mousewheel]}
            >
                <SwiperSlide><TechStack01 /></SwiperSlide>
                <SwiperSlide><TechStack02 /></SwiperSlide>
                <SwiperSlide><TechStack03 /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default TechStack