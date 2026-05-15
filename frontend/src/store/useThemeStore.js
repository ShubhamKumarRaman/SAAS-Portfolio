import { create } from 'zustand'

const useThemeStore = create((set) => ({
    theme: localStorage.getItem('theme') || 'dark',

    toggleTheme: () =>
        set((state) => {
            const newTheme = state.theme === 'dark' ? 'light' : 'dark'

            localStorage.setItem('theme', newTheme)

            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(newTheme)

            return {
                theme: newTheme,
            }
        }),
}))

export default useThemeStore