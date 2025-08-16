import { create } from 'zustand';

interface StateType {
  isSchemeType: boolean;
  setSchemeType: (isSchemeType: boolean) => void;
}
const useSchemeStore = create<StateType>((set) => ({
  isSchemeType: false,
  setSchemeType: (isSchemeType: boolean) => set({isSchemeType: isSchemeType}),
}));

export default useSchemeStore;