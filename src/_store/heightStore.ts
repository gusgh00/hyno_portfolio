import { create } from 'zustand';

interface StateType {
  isHeight: number;
  setIsHeight: (isHeight: number) => void;
}
const useHeightStore = create<StateType>((set) => ({
  isHeight: 0,
  setIsHeight: (isHeight: number) => set({isHeight: isHeight}),
}));

export default useHeightStore;