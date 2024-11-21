import { create } from 'zustand';

export const useStore = create((set) => ({
    chatbotOpened: false,
    setChatbotOpened: (val) => set({ chatbotOpened: val }),
    scroller: null,
    setScroller: (obj) => set({ scroller: obj }),

    isFirstLoad: false,
    setIsFirstLoad: (val) => set({ isFirstLoad: val }),
    isTransitionActive: true,
    setIsTransitionActive: (val) => set({ isTransitionActive: val }),
}));
