"use client"
import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";
import ActiveTab from "@components/active/ActiveTab";
import { useEffect, useState } from "react";
import ActiveSelect from "@components/active/ActiveSelect";
import ActiveInput from "@components/active/ActiveInput";
import ActiveButton from "@components/active/ActiveButton";
import { MdCheck } from "react-icons/md";
import ActiveSwitch from "@components/active/ActiveSwitch";
import { AccountInfoInterface, AccountResultInterface, BankListInterface } from "../../../_interfaces/AccountInterface";
import useWidthStore from "@store/widthStore";
import useSwiperStore from "@store/swiperStore";
const { bankList, covertAccountNumber } = require("account-number-convert");

const TechStack04 = () => {
    const code = [
        `const bankList = [
    {
        account_name: "한국산업은행",
        account_code: "002",
        account_number_list: [
            {
                number_count: 14,
                structure: [3, 8, 3]
            },
            {
                number_count: 11,
                structure: [3, 2, 6]
            },
        ]
    },
    {
        account_name: "IBK기업은행",
        account_code: "003",
        account_number_list: [
            {
                number_count: 10,
                structure: [8, 2]
            },
            {
                number_count: 11,
                structure: [3, 8]
            },
            {
                number_count: 12,
                structure: [3, 2, 7]
            },
            {
                number_count: 14,
                structure: [3, 6, 2, 3]
            },
        ]
    },
    ...
]
const reg = /\D/g;

const covertAccountNumber = (account_number, bank_code, owner, masking) => {
    const cleanAccountNumber = String(account_number).replace(reg, '');
    const foundBank = bankList.find(bank => bank.account_code.includes(bank_code));

    if (!foundBank) {
        return null;
    }

    const foundStructure = foundBank.account_number_list.find(item => item.number_count === cleanAccountNumber.length);

    if (!foundStructure) {
        return null;
    }

    let resultParts = [];
    let currentIndex = 0;

    for (const len of foundStructure.structure) {
        const part = cleanAccountNumber.substring(currentIndex, currentIndex + len);
        resultParts.push(part);
        currentIndex += len;
    }

    if (masking && resultParts.length >= 2) {
        const lastIndex = resultParts.length - 1;
        resultParts[lastIndex] = '*'.repeat(resultParts[lastIndex].length);

        const secondLastIndex = resultParts.length - 2;
        resultParts[secondLastIndex] = '*'.repeat(resultParts[secondLastIndex].length);
    }

    return {
        bank_name: foundBank.account_name,
        account_number: resultParts.join('-'),
        result: {foundBank.account_name} {resultParts.join('-')} ({owner})
    };
}

module.exports = {
    bankList,
    covertAccountNumber,
};`,
``
    ]
    const [isCodeTabIndex, setCodeTabIndex] = useState<number>(0)

    const [isSelected, setSelected] = useState<number | null>(null)
    const [isAccount, setAccount] = useState<AccountInfoInterface>({ account_number: "", bank_code: "", owner: "", masking: false })
    const [isResult, setResult] = useState<AccountResultInterface>({ account_number: "결과가 없습니다.", bank_name: "결과가 없습니다.", result: "결과가 없습니다." })

    const [isBoxTabIndex, setBoxTabIndex] = useState<number>(0)
    const { isWidth } = useWidthStore()

    const { setIsSwiper } = useSwiperStore()

    useEffect(() => {
        if (isSelected !== null) {
            const bank_code = bankList.find((item: BankListInterface, index: number) => index === isSelected).account_code
            setAccount({ ...isAccount, bank_code: bank_code })
        }
    }, [isSelected])

    const handleConvertAccount = () => {
        const result = covertAccountNumber(isAccount.account_number, isAccount.bank_code, isAccount.owner, isAccount.masking)
        setResult(result === null ? { account_number: "결과가 없습니다.", bank_name: "결과가 없습니다.", result: "결과가 없습니다." } : result)
    }
    return (
        <>
            <div className={`${styles.tech_stack_main} ${styles.tech_stack_04_main}`}>
                <div className={styles.mobile_view}>
                    <ActiveTab tabArr={['result', 'code']} selectedIndex={isBoxTabIndex} onClick={(tabIndex: number) => setBoxTabIndex(tabIndex)} />
                </div>
                <div className={`${styles.start_section} ${isWidth <= 1600 ? (isBoxTabIndex === 0 ? styles.display_block : styles.display_none) : ""}`}>
                    <div className={styles.info_section}>
                        <span className={"font-title"}>npm 라이브러리</span>
                    </div>
                    <div className={styles.result_section}
                        onMouseOver={() => setIsSwiper(false)}
                        onMouseOut={() => setIsSwiper(true)}
                    >
                        <span className="font-desc">Input <span className="font-accent">* 저장되지 않는 입력폼입니다.</span></span>
                        <div className={styles.step}>
                            <div className={styles.full}>
                                <div className={styles.half}>
                                    <ActiveInput
                                        type="text"
                                        disabled={false}
                                        value={isAccount.account_number}
                                        placeholder="계좌번호 입력"
                                        onChange={(text: string) => setAccount({ ...isAccount, account_number: text })}
                                    />
                                </div>
                                <div className={styles.half}>
                                    <ActiveSelect
                                        disabled={false}
                                        selected_value={isSelected}
                                        select_list={bankList.map((item: BankListInterface) => item.account_name)}
                                        placeholder="은행 선택"
                                        onSelect={(index: number) => setSelected(index)}
                                    />
                                </div>
                            </div>
                            <div className={styles.full}>
                                <div className={styles.half}>
                                    <div className={styles.quarter}>
                                        <ActiveInput
                                            type="text"
                                            disabled={false}
                                            value={isAccount.owner}
                                            placeholder="예금주 입력"
                                            onChange={(text: string) => setAccount({ ...isAccount, owner: text })}
                                        />
                                    </div>
                                    <div className={styles.quarter}>
                                        <ActiveSwitch
                                            disabled={false}
                                            title="마스킹"
                                            value={isAccount.masking}
                                            onClick={(status: boolean) => setAccount({ ...isAccount, masking: status })}
                                        />
                                    </div>
                                </div>
                                <div className={styles.half}>
                                    <ActiveButton type="round" disabled={!(isAccount.account_number !== "" && isAccount.bank_code !== "" && isAccount.owner !== "")} className="bg-success"
                                        onClick={() => handleConvertAccount()}
                                    >
                                        <MdCheck />
                                    </ActiveButton>
                                </div>
                            </div>
                        </div>
                        <span className="font-desc">Output</span>
                        <div className={styles.step}>
                            <div className={styles.full}>
                                <span className="font-desc">result : <span className="font-secondary">{isResult.result}</span></span>
                            </div>
                            <div className={styles.full}>
                                <span className="font-desc">account_number : <span className="font-secondary">{isResult.account_number}</span></span>
                            </div>
                            <div className={styles.full}>
                                <span className="font-desc">bank_name : <span className="font-desc font-secondary">{isResult.bank_name}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.end_section} ${isWidth <= 1600 ? (isBoxTabIndex === 1 ? styles.display_block : styles.display_none) : ""}`}>
                    <ActiveTab tabArr={['npm']} selectedIndex={isCodeTabIndex} onClick={(tabIndex: number) => setCodeTabIndex(tabIndex)} />
                    <CodeBox code={code[isCodeTabIndex]} />
                </div>
            </div>
        </>
    );
}

export default TechStack04