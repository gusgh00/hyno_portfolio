"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import styles from "./page.module.css";
import TechStack01 from "@components/pages/tech_stack/TechStack01";

export default function Home() {
  return (
    <div className={styles.main}>
      <Swiper
        direction={'vertical'}
        mousewheel={true}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Mousewheel]}
      >
        <SwiperSlide><TechStack01 /></SwiperSlide>
      </Swiper>
    </div>
  );
}
