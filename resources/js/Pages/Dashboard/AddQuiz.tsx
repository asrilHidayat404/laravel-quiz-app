import Dashboard from '@/Layouts/Dashboard/Dashboard';
import { Head } from '@inertiajs/react';

const AddQuiz = () => {
    return (
        <Dashboard>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    );
};

export default AddQuiz;
