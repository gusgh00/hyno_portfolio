import styles from "./comp.module.css";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";
import useHeightStore from "@store/heightStore";

const Career00 = () => {
    const [isMiniImage, setMiniImage] = useState<boolean>(false)
    const { isHeight } = useHeightStore()
    return (
        <>
            <div className={styles.career_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>비트썸원</span>
                    <span className={styles.date}>2023.05.02 ~ 2024.07.31</span>
                    <div className={`${styles.banner_box} ${styles.background02} ${isMiniImage && isHeight < 700 ? styles.minimum : "" }`}>
                        <Link href="https://beatsomeone.com" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}
                        onMouseOver={() => setMiniImage(true)}
                        onMouseOut={() => setMiniImage(false)}
                    >
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>주식회사 비트썸원에서 1년 4개월간 개발자로 근무하면서 작곡가, 음악 전문 업체에 필요한 시스템을 운영해왔습니다.</span>
                        <span className={styles.name}>도봉구청 청년인턴 근무기간</span>
                        <span className={styles.desc}>2023.05.01 ~ 2023.10.31</span>
                        <span className={styles.name}>정규직 근무기간</span>
                        <span className={styles.desc}>2023.11.01 ~ 2024.07.31</span>
                        <span className={styles.name}>담당업무</span>
                        <span className={styles.desc}>웹서비스 개발 및 유지보수 (Front-End/Back-End)</span>
                        <span className={styles.name}>업무내용</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> 음원 클라우딩 SaaS 웹서비스 운영<br />
                            <GoDotFill className={styles.dot} /> 내부 백오피스 (어드민 웹서비스) 개발 및 유지보수<br />
                            <GoDotFill className={styles.dot} /> 음원 에셋 판매 및 퍼블리싱 자동화 시스템 개발
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career00