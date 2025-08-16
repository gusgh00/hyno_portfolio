import styles from "./comp.module.css";

const ActiveTab = (props: {
    onClick: (tabIndex: number) => void,
    tabArr: string[],
    selectedIndex: number
}) => {
    return (
        <>
        <div className={styles.active_tab}>
            {props.tabArr.map((item, index) => (
                <button type="button" key={index} className={`${styles.tab} ${index === props.selectedIndex ? styles.selected : styles.default}`}
                    onClick={() => props.onClick(index)}
                >
                    {item}
                </button>
            ))}
        </div>
        </>
    );
}

export default ActiveTab