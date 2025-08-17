import { create } from 'zustand';
import { UserListInterface } from '../_interfaces/UserInterface';
import { userList } from '@items/UserList';

interface StateType {
  isUserList: UserListInterface[];
  setUserList: (isUserList: UserListInterface[]) => void;
  createUser: (isUser: UserListInterface) => void;
  updateNameUser: (index:number, value: string) => void;
  updateAgeUser: (index:number, value: number) => void;
  removeUser: (index:number) => void;
  setEditStatus: (index:number) => void;
}
const useUserStore = create<StateType>((set) => ({
  isUserList: userList,
  setUserList: (isUserList: UserListInterface[]) => set({isUserList: isUserList}),
  createUser: (isUser: UserListInterface) => set((state) => ({
    isUserList: [...state.isUserList, isUser]
  })),
  updateNameUser: (index: number, value: string) => set((state) => ({
    isUserList: state.isUserList.map((item, idx) => idx === index ? {...item, name: value} : item)
  })),
  updateAgeUser: (index: number, value: number) => set((state) => ({
    isUserList: state.isUserList.map((item, idx) => idx === index ? {...item, age: value} : item)
  })),
  removeUser: (index: number) => set((state) => ({
    isUserList: state.isUserList.filter((item, idx) => index !== idx)
  })),
  setEditStatus: (index: number) => set((state) => ({
    isUserList: state.isUserList.map((item, idx) => idx === index ? {...item, editStatus: !item.editStatus} : item)
  })),
}));

export default useUserStore;