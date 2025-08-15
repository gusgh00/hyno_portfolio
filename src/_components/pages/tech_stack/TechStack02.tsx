import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";

const TechStack02 = () => {
    const code = `
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    `
    return (
        <>
            <div className={styles.tech_stack_main}>
                <div className={styles.start_section}>
                    <div className={styles.info_section}>
                        <span className={"font-title"}>콘솔로그</span>
                    </div>
                    <div className={styles.result_section}></div>
                </div>
                <div className={styles.end_section}>
                    <CodeBox code={code}/>
                </div>
            </div>
        </>
    );
}

export default TechStack02