import { Head } from '@inertiajs/react';
import Layout from './DashboardLayout';

const Dashboard = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout>
            <Head title="Dashboard - Quizizz" />
            <div className="flex min-h-screen flex-col bg-purple-50">
                {/* Main Content */}
                {children}
            </div>
        </Layout>
    );
};

export default Dashboard;
