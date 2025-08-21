import useHeightStore from "@store/heightStore";
import styles from "./comp.module.css";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

const Project03 = () => {
    const [isMiniImage, setMiniImage] = useState<boolean>(false)
    const { isHeight } = useHeightStore()
    return (
        <>
            <div className={styles.project_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>주식회사 엑시트</span>
                    <span className={styles.date}>2025.07</span>
                    <div className={`${styles.banner_box} ${styles.background03} ${isMiniImage && isHeight < 700 ? styles.minimum : "" }`}>
                        <Link href="https://www.exitco.kr" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}
                        onMouseOver={() => setMiniImage(true)}
                        onMouseOut={() => setMiniImage(false)}
                    >
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>주식회사 엑시트 의뢰 프로젝트</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Next JS, Typescript, vercel</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> 인증 신청 폼 제작 및 pdf 변환 (html-to-image, jspdf)<br />
                            <GoDotFill className={styles.dot} /> contact us 이메일 전송 (nodemailer, SMTP)<br />
                            <GoDotFill className={styles.dot} /> 요청에 따른 텍스트 시인성 확보<br />
                            <GoDotFill className={styles.dot} /> 디자인 및 퍼블리싱<br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project03