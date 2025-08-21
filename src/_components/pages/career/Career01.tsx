import styles from "./comp.module.css";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";
import useHeightStore from "@store/heightStore";

const Career01 = () => {
    const [isMiniImage, setMiniImage] = useState<boolean>(false)
    const { isHeight } = useHeightStore()
    return (
        <>
            <div className={styles.career_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>바이비츠 (BY BEATS)</span>
                    <span className={styles.date}>2023.05.02 ~ 2024.07.31</span>
                    <div className={`${styles.banner_box} ${styles.background01} ${isMiniImage && isHeight < 700 ? styles.minimum : "" }`}>
                        <Link href="https://bybeats.com" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}
                        onMouseOver={() => setMiniImage(true)}
                        onMouseOut={() => setMiniImage(false)}
                    >
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>B2C 웹서비스 (SaaS), 백오피스 서비스, 음원 클라우드 서비스, 음악 전문 기업, 전문 프로듀서와의 컨택 그리고 멘토링 서비스 제공</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Next.js, Typescript, PHP Laravel, GCP (Ubuntu), npm, nginx, pm2, php-fpm</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> Recoil 상태 관리 적극 사용<br />
                            <GoDotFill className={styles.dot} /> 음원 & 앨범 구매, 구독 시스템, 멘토링 결제 시스템 (toss-payments)<br />
                            <GoDotFill className={styles.dot} /> 메인페이지, 헤더 퍼블리싱 및 애니메이션 (LottieFiles)<br />
                            <GoDotFill className={styles.dot} /> internationalization 언어 지원 서비스 (i18next)<br />
                            <GoDotFill className={styles.dot} /> 카카오톡, 잔디 웹훅 멘토링 및 구독 알림 (coolsms, tosslab.jandi)<br />
                            <GoDotFill className={styles.dot} /> SEO 최적화 (Light House, google-analytics)<br />
                            <GoDotFill className={styles.dot} /> 기타 핫픽스 및 백오피스 운영 관리<br />
                        </span>
                        <span className={styles.name}>성과</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> 유럽 IT박람회 웹서밋(WebSummit 2023) 참여 (2023.11)<br />
                            <GoDotFill className={styles.dot} /> 대학교 실용음악 학부 및 학과생 신규 가입<br />
                            <GoDotFill className={styles.dot} /> 대형 기획 프로듀서 및 작곡가 영업<br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career01