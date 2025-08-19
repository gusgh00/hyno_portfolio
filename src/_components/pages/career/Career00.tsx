import styles from "./comp.module.css";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

const Career00 = () => {
    return (
        <>
            <div className={styles.career_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>비트썸원</span>
                    <span className={styles.date}>2023.05.02 ~ 2024.07.31</span>
                    <div className={`${styles.banner_box} ${styles.background02}`}>
                        <Link href="https://beatsomeone.com" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}>
                        <span className={styles.name}>도봉구청 청년인턴 근무기간</span>
                        <span className={styles.desc}>2023.05.01 ~ 2023.10.31</span>
                        <span className={styles.name}>정규직 근무기간</span>
                        <span className={styles.desc}>2023.11.01 ~ 2024.07.31</span>
                        <span className={styles.name}>담당업무</span>
                        <span className={styles.desc}>웹서비스 개발 및 유지보수</span>
                        <span className={styles.name}>업무내용</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> 바이비츠 웹서비스 유지보수<br />
                            <GoDotFill className={styles.dot} /> 내부 백오피스 (어드민 웹서비스) 개발 및 유지보수<br />
                            <GoDotFill className={styles.dot} /> 음원 에셋 판매 사이트 업로드 매크로 개발 및 유지보수<br />
                            <GoDotFill className={styles.dot} /> 유통사, 권리자 정산 시스템 개발 및 유지보수
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Career00