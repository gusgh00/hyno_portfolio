import useHeightStore from "@store/heightStore";
import styles from "./comp.module.css";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

const Project02 = () => {
    const [isMiniImage, setMiniImage] = useState<boolean>(false)
    const { isHeight } = useHeightStore()
    return (
        <>
            <div className={styles.project_main}>
                <div className={styles.info_box}>
                    <span className={styles.title}>개미굴 가이드</span>
                    <span className={styles.date}>2024.12</span>
                    <div className={`${styles.banner_box} ${styles.background02} ${isMiniImage && isHeight < 800 ? styles.minimum : "" }`}>
                        <Link href="http://ryuhyno.notion.site/1601956b6163806f8f4ffdfb5f58ba29?pvs=74" target="_blank" className={styles.icon_box}>
                            <LuExternalLink className={styles.icon} />
                        </Link>
                    </div>
                    <div className={styles.desc_box}
                        onMouseOver={() => setMiniImage(true)}
                        onMouseOut={() => setMiniImage(false)}
                    >
                        <span className={styles.name}>소개</span>
                        <span className={styles.desc}>오픈 API를 이용한 여행 스케줄링 가이드 프로젝트</span>
                        <span className={styles.name}>사용 언어 및 개발환경</span>
                        <span className={styles.desc}>Next JS, Typescript, github-pages</span>
                        <span className={styles.name}>주요업무 및 상세역할</span>
                        <span className={styles.desc}>
                            <GoDotFill className={styles.dot} /> zustand 상태 관리 사용<br />
                            <GoDotFill className={styles.dot} /> 지도 api 활용 (kakao map api)<br />
                            <GoDotFill className={styles.dot} /> 대한민국 지역 선택 (SGIS API)<br />
                            <GoDotFill className={styles.dot} /> 도보, 자전거 지오메트리 (MAP BOX API)<br />
                            <GoDotFill className={styles.dot} /> 자가용 지오메트리 (KAKAO MOBILITY API)<br />
                            <GoDotFill className={styles.dot} /> <span style={{ textDecoration: "line-through"}}>대중교통 지오메트리 (ODSAY API)</span><br />
                            <GoDotFill className={styles.dot} /> 장소 순서 변경 (@hello-pangea/dnd)<br />
                            <GoDotFill className={styles.dot} /> 데이트 피커 컴포넌트 제작 (date-fns, dayjs)<br />
                            <GoDotFill className={styles.dot} /> 결과 엑셀 파일 변환 (xlsx)<br />
                            <GoDotFill className={styles.dot} /> 디자인 및 퍼블리싱<br />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project02