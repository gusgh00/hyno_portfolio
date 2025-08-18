"use client"
import CodeBox from "@components/code_box/CodeBox";
import styles from "./comp.module.css";
import ActiveTab from "@components/active/ActiveTab";
import { useState } from "react";
import useUserStore from "@store/userStore";
import ActiveButton from "@components/active/ActiveButton";
import { MdCheck, MdEdit, MdOutlineBackspace, MdOutlineRemoveCircle } from "react-icons/md";
import { UserListInterface } from "../../../_interfaces/UserInterface";

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
    const [isAddUser, setAddUser] = useState<UserListInterface>({ name: "", age: 0, editStatus: false })
    const { isUserList, createUser, updateNameUser, updateAgeUser, removeUser, setEditStatus } = useUserStore()
    return (
        <>
            <div className={`${styles.tech_stack_main} ${styles.tech_stack_03_main}`}>
                <div className={styles.start_section}>
                    <div className={styles.info_section}>
                        <span className={"font-title"}>상태 관리 (Zustand)</span>
                    </div>
                    <div className={styles.result_section}>
                        <span className="font-desc">Result</span>
                        <div className={styles.step}>
                            <div className={styles.table}>
                                <div className={styles.t_head}>
                                    <span className={styles.sort}>#</span>
                                    <span className={styles.name}>이름</span>
                                    <span className={styles.age}>나이</span>
                                    <span className={styles.btn}>*</span>
                                </div>
                                <div className={styles.t_body}>
                                    {isUserList.map((item, index) => (
                                        <div className={styles.t_li} key={index}>
                                            {item.editStatus
                                                ?
                                                <>
                                                    <span className={styles.sort}>{index + 1}</span>
                                                    <span className={styles.name}>
                                                        <input type="text" name="name" placeholder="입력해주세요." value={item.name} onChange={(event) => updateNameUser(index, event.target.value)} />
                                                    </span>
                                                    <span className={styles.age}>
                                                        <input type="number" name="age" placeholder="입력해주세요." value={item.age} onChange={(event) => updateAgeUser(index, Number(event.target.value))} />
                                                    </span>
                                                    <div className={styles.btn}>
                                                        <ActiveButton type="round" disabled={!(item.name !== "" && item.age !== 0)} className="bg-success" onClick={() => setEditStatus(index)}>
                                                            <MdCheck />
                                                        </ActiveButton>
                                                        <ActiveButton type="round" disabled={false} className="bg-secondary" onClick={() => {
                                                            updateNameUser(index, "")
                                                            updateAgeUser(index, 0)
                                                        }}>
                                                            <MdOutlineBackspace />
                                                        </ActiveButton>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <span className={styles.sort}>{index + 1}</span>
                                                    <span className={styles.name}>{item.name}</span>
                                                    <span className={styles.age}>{item.age}</span>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.end_section}>
                    <ActiveTab tabArr={['TypeScript', 'DOM']} selectedIndex={isCodeTabIndex} onClick={(tabIndex: number) => setCodeTabIndex(tabIndex)} />
                    <CodeBox code={code[isCodeTabIndex]} />
                </div>
            </div>
        </>
    );
}

export default TechStack03