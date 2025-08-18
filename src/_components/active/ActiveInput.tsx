import styles from "./comp.module.css";

const ActiveInput = (props: {
    type: string,
    onChange: (text: string) => void,
    disabled: boolean,
    value: string | number,
    placeholder: string
}) => {
    return (
        <>
            <div className={styles.active_input}>
                <input type={props.type} disabled={props.disabled} placeholder={props.placeholder} value={props.value} onChange={(event) => props.onChange(event.target.value)} className={styles.input} autoComplete="off"/>
            </div>
        </>
    );
}

export default ActiveInput