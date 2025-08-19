"use client"
import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";
import ActiveTab from "@components/active/ActiveTab";
import { useState } from "react";
import useUserStore from "@store/userStore";
import ActiveButton from "@components/active/ActiveButton";
import { MdCheck, MdEdit, MdOutlineBackspace, MdOutlineRemoveCircle } from "react-icons/md";
import { UserListInterface } from "../../../_interfaces/UserInterface";
import useSwiperStore from "@store/swiperStore";
import ActiveInput from "@components/active/ActiveInput";
import useWidthStore from "@store/widthStore";

const TechStack03 = () => {
    const code = [
        `//UserList.ts
import { UserListInterface } from "../_interfaces/UserInterface";

export const userList: UserListInterface[] = [
    {
        name: "고니",
        age: 25,
        editStatus: false
    },
    {
        name: "정마담",
        age: 24,
        editStatus: false
    },
    ...
]

//UserInterface.ts
export interface UserListInterface {
    name: string,
    age: number,
    editStatus: boolean,
}

//userStore.ts
import { create } from 'zustand';
import { UserListInterface } from '../_interfaces/UserInterface';
import { userList } from '@items/UserList';

interface StateType {
  isUserList: UserListInterface[];
  setUserList: (isUserList: UserListInterface[]) => void;
  createUser: (isUser: UserListInterface) => void;
  ...
}
const useUserStore = create<StateType>((set) => ({
  isUserList: userList,
  setUserList: (isUserList: UserListInterface[]) => set({isUserList: isUserList}),
  createUser: (isUser: UserListInterface) => set((state) => ({
    isUserList: [...state.isUserList, isUser]
  })),
  ...
}));

export default useUserStore;`,
        `const App = () => {
    const { isUserList, createUser, ... } = useUserStore()
    return (
        <>
            <div className={styles.t_input}>
                <span className={styles.sort}>#</span>
                <div className={styles.name}>
                    <input type="text" name="name" placeholder="입력해주세요." value={isAddUser.name} onChange={(event) => setAddUser({ ...isAddUser, name: event.target.value })} />
                </div>
                <div className={styles.age}>
                    <input type="number" name="age" placeholder="입력해주세요." value={isAddUser.age} onChange={(event) => setAddUser({ ...isAddUser, age: Number(event.target.value) })} />
                </div>
                <div className={styles.btn}>
                    <ActiveButton type="round" disabled={!(isAddUser.name !== "" && isAddUser.age !== 0)} className="bg-success" onClick={() => {
                        createUser(isAddUser)
                        setAddUser({ name: "", age: 0, editStatus: false })
                    }}>
                        <MdCheck />
                    </ActiveButton>
                    <ActiveButton type="round" disabled={false} className="bg-secondary" onClick={() => setAddUser({ name: "", age: 0, editStatus: false })}>
                        <MdOutlineBackspace />
                    </ActiveButton>
                 </div>
            </div>
        </>
    )
}`
    ]
    const [isCodeTabIndex, setCodeTabIndex] = useState<number>(0)
    const [isAddUser, setAddUser] = useState<UserListInterface>({ name: "", age: "", editStatus: false })

    const [isBoxTabIndex, setBoxTabIndex] = useState<number>(0)
    const { isWidth } = useWidthStore()

    const { isUserList, createUser, updateNameUser, updateAgeUser, removeUser, setEditStatus } = useUserStore()
    const { setIsSwiper } = useSwiperStore()
    return (
        <>
            <div className={`${styles.tech_stack_main} ${styles.tech_stack_03_main}`}>
                <div className={styles.mobile_view}>
                    <ActiveTab tabArr={['result', 'code']} selectedIndex={isBoxTabIndex} onClick={(tabIndex: number) => setBoxTabIndex(tabIndex)} />
                </div>
                <div className={`${styles.start_section} ${isWidth <= 1600 ? (isBoxTabIndex === 0 ? styles.display_block : styles.display_none) : ""}`}>
                    <div className={styles.info_section}>
                        <span className={"font-title"}>상태 관리 (Zustand)</span>
                    </div>
                    <div className={styles.result_section}
                        onMouseOver={() => setIsSwiper(false)}
                        onMouseOut={() => setIsSwiper(true)}
                    >
                        <span className="font-desc">Result</span>
                        <div className={styles.step}>
                            <div className={styles.table}>
                                <div className={styles.t_head}>
                                    <span className={styles.sort}>#</span>
                                    <span className={styles.name}>이름</span>
                                    <span className={styles.age}>나이</span>
                                    <span className={styles.btn}>*</span>
                                </div>
                                <div className={styles.t_body}
                                    onMouseOver={() => setIsSwiper(false)}
                                    onMouseOut={() => setIsSwiper(true)}
                                >
                                    {isUserList.map((item, index) => (
                                        <div className={styles.t_li} key={index}>
                                            {item.editStatus
                                                ?
                                                <>
                                                    <span className={styles.area}>{index + 1}</span>
                                                    <span className={styles.area}>
                                                        <ActiveInput
                                                            type="text"
                                                            disabled={false}
                                                            value={item.name}
                                                            placeholder="이름 입력"
                                                            onChange={(text: string) => updateNameUser(index, text)}
                                                        />
                                                    </span>
                                                    <span className={styles.area}>
                                                        <ActiveInput
                                                            type="number"
                                                            disabled={false}
                                                            value={item.age}
                                                            placeholder="나이 입력"
                                                            onChange={(text: string) => updateAgeUser(index, text)}
                                                        />
                                                    </span>
                                                    <div className={styles.btn}>
                                                        <ActiveButton type="round" disabled={!(item.name !== "" && item.age !== "")} className="bg-success" onClick={() => setEditStatus(index)}>
                                                            <MdCheck />
                                                        </ActiveButton>
                                                        <ActiveButton type="round" disabled={false} className="bg-secondary" onClick={() => {
                                                            updateNameUser(index, "")
                                                            updateAgeUser(index, "")
                                                        }}>
                                                            <MdOutlineBackspace />
                                                        </ActiveButton>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <span className={styles.area}>{index + 1}</span>
                                                    <span className={styles.area}>{item.name}</span>
                                                    <span className={styles.area}>{item.age}</span>
                                                    <div className={styles.btn}>
                                                        <ActiveButton type="round" disabled={false} className="bg-accent" onClick={() => setEditStatus(index)}>
                                                            <MdEdit />
                                                        </ActiveButton>
                                                        <ActiveButton type="round" disabled={isUserList.length <= 1} className="bg-error" onClick={() => removeUser(index)}>
                                                            <MdOutlineRemoveCircle />
                                                        </ActiveButton>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    ))}
                                    <div className={styles.t_input}>
                                        <span className={styles.area}>#</span>
                                        <div className={styles.area}>
                                            <ActiveInput
                                                type="text"
                                                disabled={false}
                                                value={isAddUser.name}
                                                placeholder="이름 입력"
                                                onChange={(text: string) => setAddUser({ ...isAddUser, name: text })}
                                            />
                                        </div>
                                        <div className={styles.area}>
                                            <ActiveInput
                                                type="number"
                                                disabled={false}
                                                value={isAddUser.age}
                                                placeholder="나이 입력"
                                                onChange={(text: string) => setAddUser({ ...isAddUser, age: text })}
                                            />
                                        </div>
                                        <div className={styles.btn}>
                                            <ActiveButton type="round" disabled={!(isAddUser.name !== "" && isAddUser.age !== "")} className="bg-success" onClick={() => {
                                                createUser(isAddUser)
                                                setAddUser({ name: "", age: "", editStatus: false })
                                            }}>
                                                <MdCheck />
                                            </ActiveButton>
                                            <ActiveButton type="round" disabled={false} className="bg-secondary" onClick={() => setAddUser({ name: "", age: "", editStatus: false })}>
                                                <MdOutlineBackspace />
                                            </ActiveButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.end_section} ${isWidth <= 1600 ? (isBoxTabIndex === 1 ? styles.display_block : styles.display_none) : ""}`}>
                    <ActiveTab tabArr={['TypeScript', 'DOM']} selectedIndex={isCodeTabIndex} onClick={(tabIndex: number) => setCodeTabIndex(tabIndex)} />
                    <CodeBox code={code[isCodeTabIndex]} />
                </div>
            </div>
        </>
    );
}

export default TechStack03