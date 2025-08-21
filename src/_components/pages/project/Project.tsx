"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Project01 from '@components/pages/project/Project01';
import useWidthStore from '@store/widthStore';
import 'swiper/css';
import 'swiper/css/pagination';
import Project02 from '@components/pages/project/Project02';
import Project03 from '@components/pages/project/Project03';
import Project04 from '@components/pages/project/Project04';

const Project = () => {
    const { isWidth } = useWidthStore()

    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={isWidth > 1600 ? 3 : (isWidth > 1000 ? 2 : 1)}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide><Project01/></SwiperSlide>
                <SwiperSlide><Project02/></SwiperSlide>
                <SwiperSlide><Project03/></SwiperSlide>
                <SwiperSlide><Project04/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Project