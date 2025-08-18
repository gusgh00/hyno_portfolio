"use client"
import { IoIosArrowDown } from "react-icons/io";
import styles from "./comp.module.css";
import { useEffect, useRef, useState } from "react";
import useSwiperStore from "@store/swiperStore";

const ActiveSelect = (props: {
    onSelect: (index: number) => void,
    disabled: boolean,
    selected_value: number | null,
    select_list: string[],
    placeholder: string
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isOnSelectBox, setOnSelectBox] = useState<boolean>(false)

    const { isSwiper, setIsSwiper } = useSwiperStore()

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref && !ref.current?.contains(event.target as Node)) {
                setOnSelectBox(false);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [ref])
    return (
        <>
            <div className={styles.active_select} onClick={() => setOnSelectBox(!isOnSelectBox)} ref={ref}>
                <div className={styles.select_box}>
                    <span className={`${styles.selected} ${props.selected_value === null ? styles.placeholder : ""}`}>
                        {props.selected_value !== null ? props.select_list[props.selected_value] : props.placeholder}
                    </span>
                    <IoIosArrowDown className={`${styles.arrow_icon} ${isOnSelectBox ? styles.select_on : ""}`} />
                </div>
                <div className={`${styles.select_list_box} ${isOnSelectBox ? styles.select_list_on : ""}`}
                    onMouseOver={() => setIsSwiper(false)}
                    onMouseOut={() => setIsSwiper(true)}
                >
                    {props.select_list.map((item, index) => (
                        <span className={styles.select} key={index} onClick={() => props.onSelect(index)}>{item}</span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ActiveSelect