import styles from "./comp.module.css";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";
import useHeightStore from "@store/heightStore";

const Project01 = () => {
    const [isMiniImage, setMiniImage] = useState<boolean>(false)
    const { isHeight } = useHeightStore()
    return (
        <>
            <div className={styles.project_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>🏆Care Bicycle Case</span>
                    <span className={styles.date}>2022.11</span>
                    <div className={`${styles.banner_box} ${styles.background01} ${isMiniImage && isHeight < 800 ? styles.minimum : "" }`}>
                        <Link href="https://ryuhyno.notion.site/2022-ICT-fd6e32e8db7f40fca590bfe4048fbdaf" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}
                        onMouseOver={() => setMiniImage(true)}
                        onMouseOut={() => setMiniImage(false)}
                    >
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>아두이노와 라즈베리파이를 이용한 자전거 관리 시스템</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>HTML5, CSS3, JavaScript (valina), nginx, doker</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> 지도 api 활용, 길 찾기 등 (tmap api)<br />
                            <GoDotFill className={styles.dot} /> 국내 Open api 활용 테마 지도 구현 (자전거 사고 다발 지역, 자전거 정비소, 따릉이 위치, 안드로이드 개발자 협업)<br />
                            <GoDotFill className={styles.dot} /> 회원가입, 로그인 구현 및 사용자 데이터 통신 (fetch, 백엔드 개발자 협업)<br />
                            <GoDotFill className={styles.dot} /> 실시간 위치 GPS 데이터 및 충격 감지 GPS 통신 (fetch)<br />
                            <GoDotFill className={styles.dot} /> 자전거 거치대, 안장 가방 시스템 제작 (시스템 개발자 협업)<br />
                            <GoDotFill className={styles.dot} /> 작품 CI 디자인 및 애프터 이펙트 활용 모션 제작 (LottieFiles)<br />
                        </span>
                        <span className={styles.name}>성과</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> 실시간 데이터 통신 및 맵 마커 구현<br />
                            <GoDotFill className={styles.dot} /> 동양미래대학교 스마트 ICT 프로젝트 경진대회 최우수상<br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project01