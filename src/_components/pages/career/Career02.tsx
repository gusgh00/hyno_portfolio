import styles from "./comp.module.css";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

const Career02 = () => {
    return (
        <>
            <div className={styles.career_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>BGBP</span>
                    <span className={styles.date}>2024.01.08 ~ 2024.07.31</span>
                    <div className={`${styles.banner_box} ${styles.background02}`}>
                        <Link href="https://beatsomeone.com" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}>
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>작곡가 대상 게임 오디오 에셋 자동화 패키징 및 업로드 시스템</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Vue.js, Vite, Vuetify, Typescript, PHP Laravel, Python</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> Pinia 상태 관리 적극 사용<br />
                            <GoDotFill className={styles.dot} /> 대용량 엑셀 데이터 json 변환, 데이터 테이블 엑셀 형태로 변환(xlsx, sheetjs)<br />
                            <GoDotFill className={styles.dot} /> 대용량 음원 데이터 업로드 대기열 시스템 (Pinia)<br />
                            <GoDotFill className={styles.dot} /> Unreal Engine, Unity, Pond5, Itch.io, Template Monster, ACON3D 각 에셋 판매 사이트 음원 패키징 및 업로드 자동화 (Python, Selenium)<br />
                            <GoDotFill className={styles.dot} /> 구글 스토리지 활용하여 음원 파일 패키징 (GCS)<br />
                            <GoDotFill className={styles.dot} /> 음원 컨버팅 및 포매팅 시스템 개발 (ffmpeg)<br />
                            <GoDotFill className={styles.dot} /> 원활한 자동화 시스템 가동을 위한 각 사이트 별 PC 환경 구축
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career02