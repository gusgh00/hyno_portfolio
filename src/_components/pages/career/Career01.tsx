import styles from "./comp.module.css";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

const Career01 = () => {
    return (
        <>
            <div className={styles.career_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>바이비츠 (BY BEATS)</span>
                    <span className={styles.date}>2023.05.02 ~ 2024.07.31</span>
                    <div className={`${styles.banner_box} ${styles.background01}`}>
                        <Link href="https://bybeats.com" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}>
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>작곡가들의 음원 클라우드 시스템과 음원 유통업체와의 컨택 및 멘토링 시스템</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Next.js, Typescript, PHP Laravel</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> Recoil 상태 관리 적극 사용<br />
                            <GoDotFill className={styles.dot} /> 음원 & 앨범, 구독 시스템, 멘토링 결제 시스템 (toss-payments)<br />
                            <GoDotFill className={styles.dot} /> 메인페이지, 헤더 퍼블리싱 및 애니메이션 (LottieFiles)<br />
                            <GoDotFill className={styles.dot} /> internationalization 언어 지원 서비스 (i18next)<br />
                            <GoDotFill className={styles.dot} /> SEO 최적화 (Light House)<br />
                            <GoDotFill className={styles.dot} /> 기타 핫픽스 및 백오피스 운영 관리<br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career01