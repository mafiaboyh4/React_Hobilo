import create from 'zustand'


interface StoreInterface {
    isDark: boolean
    changeTheme: (dark:boolean) => void
}

export const Store = create<StoreInterface>((set , get) => ({
    isDark: localStorage.getItem('isDark') == 'false' ? false : true,
    changeTheme:(dark) => {
        const {isDark} = get();
        set({isDark:dark});
        
        localStorage.setItem('isDark' , String(!isDark) )
        let htmlElement = document.documentElement;
        htmlElement.setAttribute('theme',  !isDark ? 'dark':'light')
    },
}))

export const initApp = () => {
    const theme = localStorage.getItem('isDark') == 'false' ? false : true ;
    let htmlElement = document.documentElement;
    htmlElement.setAttribute('theme',  theme ? 'dark':'light')
}
   