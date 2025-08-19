import { create } from 'zustand';

interface StateType {
  isWidth: number;
  setIsWidth: (isWidth: number) => void;
}
const useWidthStore = create<StateType>((set) => ({
  isWidth: 0,
  setIsWidth: (isWidth: number) => set({isWidth: isWidth}),
}));

export default useWidthStore;