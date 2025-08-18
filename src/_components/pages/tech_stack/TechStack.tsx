"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import TechStack01 from "@components/pages/tech_stack/TechStack01";
import TechStack02 from './TechStack02';
import TechStack03 from '@components/pages/tech_stack/TechStack03';

// import 'swiper/css';
import 'swiper/css/pagination';
import ScrollDown from '@components/animation/ScrollDown';
import TechStack04 from './TechStack04';

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
                pagination={true}
                modules={[Mousewheel, Pagination]}
            >
                <SwiperSlide><TechStack01 /><ScrollDown/></SwiperSlide>
                <SwiperSlide><TechStack02 /><ScrollDown/></SwiperSlide>
                <SwiperSlide><TechStack03 /><ScrollDown/></SwiperSlide>
                <SwiperSlide><TechStack04 /><ScrollDown/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default TechStack