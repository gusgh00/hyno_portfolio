import styles from "./comp.module.css";

const ActiveSwitch = (props: {
    onClick: (status: boolean) => void,
    disabled: boolean,
    title: string,
    value: boolean
}) => {
    return (
        <>
            <div className={styles.active_switch} onClick={() => props.onClick(!props.value)}>
                <span className={styles.title}>{props.title}</span>
                <div className={`${styles.switch_box} ${props.value ? styles.switch_on : styles.switch_off}`}>
                    <div className={styles.switch}> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default ActiveSwitch