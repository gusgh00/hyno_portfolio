import styles from "./comp.module.css";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const Career04 = () => {
    return (
        <>
            <div className={styles.career_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>어그리투</span>
                    <span className={styles.date}>2023.08.12 ~ 2024.02.16</span>
                    <div className={`${styles.banner_box} ${styles.background04}`}>
                        <Link href="https://beatsomeone.com" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}>
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>음원 저작권 개작동의 시스템</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Vue.js, Vite, Vuetify, Typescript, PHP Laravel</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            - Pinia 상태 관리 사용<br/>
                            - CRUD 성능 개선
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career04