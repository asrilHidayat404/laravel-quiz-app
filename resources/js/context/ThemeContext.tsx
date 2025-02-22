import { createContext, useContext, useEffect, useState } from 'react';

type themes = 'dark' | 'light';

type ThemeContextType = {
    theme: themes;
    handleTheme: React.Dispatch<React.SetStateAction<themes>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);
export default function ThemeContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<themes>(
        () =>
            (localStorage.getItem('themeMode') as 'light' | 'dark') || 'light',
    );

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('context not found');
    }
    return context;
};
