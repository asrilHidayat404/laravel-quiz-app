import Dashboard from '@/Layouts/Dashboard/Dashboard';
import { SearchIcon } from 'lucide-react';

export default function index() {
    return (
        <Dashboard>
            <div className="flex-1 px-4 py-8 md:px-8">
                <div className="mx-auto max-w-6xl">
                    <h1 className="mb-6 text-center text-3xl font-bold">
                        Apa yang kamu ajarkan hari ini?
                    </h1>

                    {/* Search Bar */}
                    <div className="relative mx-auto mb-8 max-w-lg">
                        <input
                            type="text"
                            placeholder="Cari topik apa saja"
                            className="w-full rounded-full border border-gray-200 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 flex justify-center space-x-4">
                        <TabButton active icon="user" text="Untukmu" />
                        <TabButton icon="document" text="Penilaian" />
                        <TabButton
                            icon="presentation"
                            text="Presentasi Intraktif"
                        />
                        <TabButton icon="video" text="Video interaktif" />
                        <TabButton icon="chart" text="Analisis" />
                    </div>
                </div>
            </div>
        </Dashboard>
    );
}

const TabButton = ({
    active,
    icon,
    text
}: {
    active?: any;
    icon?: any;
    text?: any;
}) => {
    const getIcon = () => {
        switch (icon) {
            case 'user':
                return (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                );
            case 'document':
                return (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                );
            case 'presentation':
                return (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v8h12V4H4z"
                                clipRule="evenodd"
                            />
                            <path d="M4 12h12v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                        </svg>
                    </div>
                );
            case 'video':
                return (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                            <path d="M14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                    </div>
                );
            case 'chart':
                return (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <button
            className={`flex flex-col items-center rounded-md px-2 py-1 ${
                active
                    ? 'border-b-2 border-purple-600 text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
            }`}
        >
            {getIcon()}
            <span className="mt-1 text-sm">{text}</span>
        </button>
    );
};

const ActivityCard = ({
    title,
    stats,
    image
}: {
    title?: any;
    stats?: any;
    image?: any;
}) => {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-sm transition duration-150 hover:shadow-md">
            <div className="flex flex-col items-center p-4">
                <div className="mb-3 flex h-24 w-24 items-center justify-center">
                    <img
                        src={image}
                        alt={title}
                        className="max-h-full max-w-full"
                    />
                </div>
                <h3 className="text-center font-medium">{title}</h3>
                <p className="text-center text-xs text-gray-500">{stats}</p>
            </div>
        </div>
    );
};
