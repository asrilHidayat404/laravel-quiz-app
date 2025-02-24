import Card from '@/Components/Card';
import Navbar from '@/Components/Navbar';

const index = () => {
    return (
        <>
            <Navbar />
            <main className="bg-white">
                <header>
                    <h1 className="mb-20 text-center text-2xl">Materi Kelas</h1>
                </header>
                <div className="grid grid-cols-1 gap-20 px-20 lg:grid-cols-5">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </>
    );
};

export default index;
