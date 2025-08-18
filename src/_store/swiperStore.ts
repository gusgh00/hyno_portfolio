import { create } from 'zustand';

interface StateType {
  isSwiper: boolean;
  setIsSwiper: (isSwiper: boolean) => void;
}
const useSwiperStore = create<StateType>((set) => ({
  isSwiper: true,
  setIsSwiper: (isSwiper: boolean) => set({isSwiper: isSwiper}),
}));

export default useSwiperStore;