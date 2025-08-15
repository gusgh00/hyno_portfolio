import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";

const TechStack02 = () => {
    return (
        <>
            <div className={styles.tech_stack_main}>
                <div className={styles.result_section}>
                </div>
                <div className={styles.info_section}>
                    <CodeBox code="console.log('Hello World')"/>
                </div>
            </div>
        </>
    );
}

export default TechStack02