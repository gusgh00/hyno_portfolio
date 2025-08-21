import styles from "./comp.module.css";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

const Project04 = () => {
    return (
        <>
            <div className={styles.project_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>제미나이 디스코드 봇</span>
                    <span className={styles.date}>2025.07</span>
                    <div className={`${styles.banner_box} ${styles.background04}`}>
                        <Link href="https://discord.com/oauth2/authorize?client_id=1389839436824576030&permissions=8&integration_type=0&scope=bot" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}>
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>gemini 무료 토큰 활용 AI 디스코드 봇</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Python, Koyeb</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> 디스코드 api (discord)<br />
                            <GoDotFill className={styles.dot} /> 24시간 호스팅 (Koyeb, aiohttp, web)<br />
                            <GoDotFill className={styles.dot} /> 프롬프트 작성 커맨드 제작 (genai, gemini-2.5-flash)<br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project04