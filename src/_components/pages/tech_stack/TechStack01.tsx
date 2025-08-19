import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";
import { stackList } from "@items/StackList";
import ActiveChip from "@components/active/ActiveChip";

const TechStack01 = () => {
    return (
        <>
            <div className={styles.tech_stack_01_main}>
                <div className={styles.description}>
                    <span className={styles.desc_text + " font-desc"}>
                        <span className="font-primary font-title lineheight-80">환경에 굴하지 않는 개발자!</span><br />
                        <span className="font-info">습득과 응용 그리고 빠른 적응력</span>으로 신속하게 프로젝트 투입이 가능합니다.<br />
                        과정을 중요하게 여기어 <span className="font-success">플로우를 분석하며 복기</span>합니다.
                    </span>
                    <br/>
                    <ActiveChip chipArr={['#Next.js', '#React.js', '# Vue.js', '#Vite', '#Zustand', '#HTML5', '#CSS3', '#Javascript', '#Typescript', '#php', '#Laravel', '#MySql', '#Postman', '#Python', '#Ubuntu', '#nginx', '#GCP', '#AWS', '#Git', '#Photoshop', '#Premiere Pro', '#After Effect']}/>
                </div>
                <div className={styles.tech_list}>
                    {Array(2).fill(
                        stackList.map((item, index) => (
                            <div key={index} className={styles.stack_box}>
                                <img src={item.img} alt={item.name} className={styles.img} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default TechStack01