import styles from "./comp.module.css";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

const Career03 = () => {
    return (
        <>
            <div className={styles.career_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>정산시스템</span>
                    <span className={styles.date}>2024.04.01 ~ 2024.07.31</span>
                    <div className={`${styles.banner_box} ${styles.background03}`}>
                        <Link href="https://beatsomeone.com" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}>
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>B2B 웹서비스, 음원 유통사 및 작곡가 대상 정산 서비스</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Vue.js, Vuetify, Typescript, PHP Laravel, GCP (Ubuntu), npm, nginx, Vite, php-fpm</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> Pinia 상태 관리 적극 사용<br/>
                            <GoDotFill className={styles.dot} /> 대용량 엑셀 데이터 json 변환, 데이터 테이블 엑셀 형태로 변환(xlsx, sheetjs)<br />
                            <GoDotFill className={styles.dot} /> 정산 데이터 동적 차트 그래프 변화 (google-chartjs)<br />
                            <GoDotFill className={styles.dot} /> 세금, 환율 계산 함수<br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career03