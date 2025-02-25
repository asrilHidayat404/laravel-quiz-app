// import { Quiz } from "../../types";

import { useThemeContext } from '@/context/ThemeContext';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

type NavbarProps = {
    title?: string;
    icon?: string;
    iconbg?: string;
};

const Navbar = ({ title, icon, iconbg }: NavbarProps) => {
    const { theme, handleTheme } = useThemeContext();
    const [menu, setMenu] = useState(false);
    const auth = usePage().props.auth;

    return (
        <nav className="fixed z-50 flex w-full items-center justify-between border-b border-gray-900 bg-white px-8 py-4 text-gray-900 dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 lg:inline-block">
            <div className="flex max-w-7xl items-center justify-between lg:mx-auto">
                {title && icon && iconbg ? (
                    <div className="flex items-center justify-start gap-4 sm:gap-6">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-md sm:h-14 sm:w-14"
                            style={{ backgroundColor: iconbg }}
                        >
                            <img
                                src={icon}
                                alt={title}
                                className="h-7 w-7 sm:h-10 sm:w-10"
                            />
                        </div>
                        <h1 className="text-[18px] font-medium sm:text-[28px]">
                            {title}
                        </h1>
                    </div>
                ) : (
                    <img
                        src="/api/placeholder/80/30"
                        alt="Odoo"
                        className="h-8"
                    />
                )}
                <div className="hidden items-center space-x-10 lg:flex">
                    <Link href="/" className="nav-link ml-8">
                        Home
                    </Link>
                    <Link href="/materi" className="nav-link">
                        Materi
                    </Link>
                    <Link href="/quiz" className="nav-link">
                        Quiz
                    </Link>
                </div>
                <div className="hidden items-center space-x-4 lg:flex">
                    {/* <ThemeToggle /> */}
                    {auth.user ? (
                        <Link href="/dashboard" className="try-free-btn">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href="/login" className="nav-link">
                                Login
                            </Link>
                            <Link href="/register" className="try-free-btn">
                                Sign In
                            </Link>
                        </>
                    )}
                </div>

                <MobileNavigation auth={auth} active={menu} />
            </div>

            <button
                className="z-10 flex lg:hidden"
                onClick={() => setMenu((prev) => !prev)}
            >
                ☰
            </button>
        </nav>
    );
};

export default Navbar;

const MobileNavigation = ({ auth, active }) => {
    return (
        <nav
            className={`animate fixed bottom-0 right-0 top-0 w-1/3 bg-gray-50 shadow-lg md:hidden lg:hidden ${active ? 'inline-block' : 'hidden'}`}
        >
            <div className="mx-auto ml-10 mt-20 flex flex-col space-y-5">
                <Link href="/" className="nav-link">
                    Home
                </Link>
                <Link href="/materi" className="nav-link">
                    Materi
                </Link>
                <Link href="/quiz" className="nav-link">
                    Quiz
                </Link>
                {auth.user ? (
                    <Link href="/dashboard" className="nav-link">
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href="/login" className="nav-link">
                            Login
                        </Link>
                        <Link href="/register" className="nav-link">
                            Sign In
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};
