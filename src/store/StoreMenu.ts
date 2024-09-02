import { create } from 'zustand'

interface typeMenu {
    openMenu: boolean,
    changeOpenMenu: () => void,  
}


export const useMenuMobile = create<typeMenu>((set) => ({
  openMenu: false,
  changeOpenMenu: () => set((state) => ({ openMenu: !state.openMenu })),
}));