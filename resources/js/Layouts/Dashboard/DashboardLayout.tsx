// resources/js/Layouts/Layout.jsx
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [menu, setMenu] = useState(false);
    const user = usePage().props.auth.user;
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div
                className={`${menu ? 'md:flex lg:flex' : 'hidden'} fixed bottom-0 left-0 top-0 z-10 w-60 flex-col border-r border-gray-200 bg-white md:static md:flex lg:static lg:flex`}
            >
                {/* Logo */}
                <div className="mb-6 ml-14 mt-2 border-b border-gray-200">
                    <Link href="/">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-purple-600">
                                Nama
                            </span>
                            <span className="ml-2 rounded bg-gray-100 px-2 py-1 text-xs">
                                App
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Create Button
                <div className="p-4">
                    <button className="flex w-full items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Buat
                    </button>
                </div> */}

                {/* Navigation */}
                <nav className="flex-1">
                    <NavItem
                        icon="home"
                        text="Dashboard"
                        active
                        route={'/dashboard'}
                    />
                    <NavItem
                        icon="library"
                        text="Tambah Kuis"
                        route={'/dashboard/add-quiz'}
                    />
                    <NavItem icon="ai" text="Tambah Materi" />
                    <NavItem icon="reports" text="Reports" />
                    <NavItem icon="classes" text="Kelas" alert />
                </nav>

                {/* Upgrade Button */}
                <div className="mt-auto p-4">
                    <button className="flex w-full items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Upgrade
                    </button>
                </div>
            </div>

            {/* Main Content */}

            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2">
                    <button
                        className="z-10 flex md:hidden lg:hidden"
                        onClick={() => setMenu((prev) => !prev)}
                    >
                        ☰
                    </button>
                    <img src="" alt="logo" />
                    <div className="flex items-center space-x-2">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#017e84] text-white">
                                        {user.name.charAt(0)}
                                    </div>
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                    >
                                        {user.name}

                                        <svg
                                            className="-me-0.5 ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto">{children}</main>
            </div>

            {/* Help Button (Fixed) */}
            <button className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg hover:bg-purple-800">
                {/* <QuestionMarkCircleIcon className="h-6 w-6" /> */}
            </button>
        </div>
    );
};

const NavItem = ({
    icon,
    text,
    active,
    alert,
    route
}: {
    icon?: any;
    text?: any;
    active?: any;
    alert?: any;
    route?: any;
}) => {
    const getIcon = () => {
        switch (icon) {
            case 'home':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                );
            case 'library':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                );
            case 'reports':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            case 'classes':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                );
            case 'assignments':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            case 'ai':
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <Link
            href={route}
            className={`flex items-center px-4 py-3 ${
                active
                    ? 'border-l-4 border-purple-600 bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:bg-gray-50'
            }`}
        >
            <span className="mr-3">{getIcon()}</span>
            <span>{text}</span>
            {alert && (
                <span className="ml-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            )}
        </Link>
    );
};

export default Layout;
