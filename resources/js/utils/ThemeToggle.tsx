import { useThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
    const { theme, handleTheme } = useThemeContext();
    return (
        <section className="flex items-center gap-2 sm:gap-3">
            <button onClick={handleTheme}>
                {theme === 'dark' ? (
                    <img
                        src="/icon-sun-light.svg"
                        alt="Light Mode"
                        className="h-4 w-4 sm:h-6 sm:w-6"
                    />
                ) : (
                    <img
                        src="/icon-moon-dark.svg"
                        alt="Dark Mode"
                        className="h-4 w-4 sm:h-6 sm:w-6"
                    />
                )}
            </button>
        </section>
    );
};

export default ThemeToggle;
