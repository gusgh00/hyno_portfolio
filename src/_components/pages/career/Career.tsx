"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Career01 from '@components/pages/career/Career01';
import Career02 from '@components/pages/career/Career02';
import Career03 from '@components/pages/career/Career03';
import Career04 from '@components/pages/career/Career04';
import Career00 from '@components/pages/career/Career00';
import 'swiper/css';
import 'swiper/css/pagination';

const Career = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide><Career00/></SwiperSlide>
                <SwiperSlide><Career01/></SwiperSlide>
                <SwiperSlide><Career02/></SwiperSlide>
                <SwiperSlide><Career03/></SwiperSlide>
                <SwiperSlide><Career04/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Career