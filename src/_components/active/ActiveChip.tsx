import styles from "./comp.module.css";

const ActiveChip = (props: {
    chipArr: string[],
}) => {
    return (
        <>
            <div className={styles.active_chip}>
                {props.chipArr.map((item, index) => (
                    <div key={index} className={styles.chip}>
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ActiveChip