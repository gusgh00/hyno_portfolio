import { create } from 'zustand';

interface StateType {
  isDummy: number;
  setIsDummy: (isDummy: number) => void;
}
const useDummyStore = create<StateType>((set) => ({
  isDummy: 0,
  setIsDummy: (isDummy: number) => set({isDummy: isDummy}),
}));

export default useDummyStore;