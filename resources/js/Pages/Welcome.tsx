import CardS2 from '@/Components/CardS2';
import Navbar from '@/Components/Navbar';
import Section from '@/Components/Section';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    return (
        <>
            <Head title="Homepage" />
            <Navbar />
            <Section>
                <div
                    className="relative flex h-screen items-center justify-center text-gray-900"
                    style={{
                        background:
                            'linear-gradient(to top, rgba(0, 0, 255, 0.3) 0%, rgba(0, 0, 255, 0.1) 10%, white 60%)'
                    }}
                >
                    <div className="flex flex-col items-center justify-center p-10 text-center">
                        <div className="lg:w-1/2">
                            <h1 className="animate__animated animate__bounceInDown text-[30px] font-semibold text-blue-500 lg:text-[48px]">
                                Free Learning Management System Holy Shit
                            </h1>
                            <p className="animate__animated animate__bounceInLeft mt-[16px] text-[16px]">
                                The best open source LMS for your eLearning
                                platform.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
                                <button className="start-now-btn animate__animated animate__bounceInRight block text-white">
                                    Study Now!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="bg-gray-800 p-10 text-white">
                    <div className="mx-auto flex flex-wrap items-center justify-center gap-5 lg:w-[70%]">
                        <CardS2
                            order={'01'}
                            text={
                                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.'
                            }
                        />
                        <CardS2
                            order={'02'}
                            text={
                                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.'
                            }
                        />
                        <CardS2
                            order={'03'}
                            text={
                                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.'
                            }
                        />
                        <CardS2
                            order={'04'}
                            text={
                                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sed.'
                            }
                        />
                    </div>
                </div>
                <div className="container mx-auto px-4 py-16">
                    <h2 className="mb-12 text-center text-2xl font-bold">
                        Keunggulan Layanan
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* <!-- Private Hosting --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-clock mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Private Hosting
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Website berjalan aman dengan performance
                                maksimal dengan teknologi terbaru
                            </p>
                        </div>

                        {/* <!-- Domain Ekstensi --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-globe mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Domain Ekstensi
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Pilihan domain dari seluruh dunia dengan harga
                                yang sangat terjangkau
                            </p>
                        </div>

                        {/* <!-- Web Hosting --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-server mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Web Hosting
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Teknologi server terbaik dengan space hosting
                                yang sangat besar
                            </p>
                        </div>

                        {/* <!-- Gratis SSL --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-shield-alt mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Gratis SSL
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Gratis sertifikat SSL untuk keamanan website
                                Anda
                            </p>
                        </div>

                        {/* <!-- Backup Berkala --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-database mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Backup Berkala
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Backup otomatis untuk menjaga keamanan data
                                website Anda
                            </p>
                        </div>

                        {/* <!-- Domain Privacy --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-user-shield mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Domain Privacy
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Privasi terjamin dengan sistem keamanan terbaik
                            </p>
                        </div>

                        {/* <!-- DNS Management --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-network-wired mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                DNS Management
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Kelola DNS dengan mudah melalui control panel
                            </p>
                        </div>

                        {/* <!-- Dukungan --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-headset mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Dukungan
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Dukungan teknis 24/7 untuk membantu Anda
                            </p>
                        </div>

                        {/* <!-- Website Builder --> */}
                        <div className="flex w-full flex-col items-center p-6 transition-transform duration-300 hover:-translate-y-1 md:w-1/4">
                            <i className="fas fa-tools mb-4 text-4xl text-teal-600"></i>
                            <h3 className="mb-2 text-lg font-semibold">
                                Website Builder
                            </h3>
                            <p className="text-center text-sm text-gray-600">
                                Buat website dengan mudah menggunakan builder
                                kami
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="mx-auto flex flex-col items-center justify-center bg-[#017e84] px-10 py-16 lg:px-0">
                    <h2 className="mb-12 text-center text-2xl font-bold">
                        Testimoni
                    </h2>

                    <div className="mx-auto max-w-3xl">
                        {/* <!-- Testimonial Card --> */}
                        <div className="mb-8 rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                            {/* <!-- Quote --> */}
                            <div className="mb-6 leading-relaxed text-gray-600">
                                "Beruntung. Terimakasih atas layanan yang
                                diberikan Webbaenakae.co.id telah membantu saya
                                mendapatkan digital presence dengan memberikan
                                informasi secara time dan tepat, karena usaha
                                saya. Webbaenakae.co.id lokasi harga sangatlam
                                tepat melayani usaha saya. Dengan tim yang
                                profesional dan ramah saya percaya
                                webbaenakae.co.id dapat yang terbaik versi sulit
                                pergantian waktu ke depan. Jadi merekomendasikan
                                kepada yang rencana aplikasi website untuk
                                Indonesia. Support dan. Lorem ipsum, dolor sit
                                amet consectetur adipisicing elit. Quod
                                molestiae odit officiis hic quasi ipsum fugit
                                nostrum numquam id amet. Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Dolor
                                voluptatem maxime enim! Sequi, similique a
                                incidunt quibusdam ut autem numquam! Molestiae
                                odio nostrum esse neque accusamus, iure hic
                                inventore. Placeat sapiente animi nobis
                                officiis. Modi assumenda reprehenderit pariatur
                                soluta nisi."
                            </div>

                            {/* <!-- Author --> */}
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-800">
                                        Vincent Steven Perdana
                                    </span>
                                    <span className="text-sm text-gray-600">
                                        Malang
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Navigation Dots --> */}
                        <div className="flex items-center justify-center gap-2">
                            <button className="h-2 w-6 rounded-full bg-teal-600 transition-all duration-300"></button>
                            <button className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400"></button>
                            <button className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400"></button>
                            <button className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400"></button>
                            <button className="h-2 w-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400"></button>
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <FAQ />
            </Section>

            <Section>
                <Footer />
            </Section>
        </>
    );
}

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mx-auto w-[350px] rounded-lg bg-[#017e84] md:w-full lg:w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-lg p-4 text-left transition-colors duration-200 focus:outline-none"
            >
                <span className="font-medium text-gray-200">{question}</span>
                <svg
                    className={`h-5 w-5 transform text-gray-200 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-gray-200">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQ = () => {
    const faqData = [
        {
            question: 'Apa itu Webbaenakae.co.id?',
            answer: 'Layanan penyedia website profesional untuk usaha, anda memiliki situs secara langsung online dalam beberapa jam dengan desain yang modern dan mengesankan.'
        },
        {
            question:
                'Apa saja yang termasuk dalam pembuatan website sekarang?',
            answer: 'Informasi lengkap tentang layanan dan fitur yang termasuk dalam paket pembuatan website.'
        },
        {
            question: 'Berapa biaya website sekarang?',
            answer: 'Informasi detail tentang biaya dan paket layanan website.'
        },
        {
            question: 'Bagaimana cara mulai pembuatan website?',
            answer: 'Panduan lengkap tentang proses memulai pembuatan website.'
        },
        {
            question: 'Apakah saya bisa memonitor pembatan layanan website?',
            answer: 'Informasi tentang sistem monitoring dan tracking pembuatan website.'
        },
        {
            question: 'Berapa waktu yang dibutuhkan untuk pembuatan website?',
            answer: 'Detail timeline dan proses pengerjaan website.'
        },
        {
            question: 'Apakah saya bisa mendesain website sendiri?',
            answer: 'Informasi tentang opsi kustomisasi dan desain website.'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-center text-2xl font-bold">
                    Pertanyaan umum (FAQ)
                </h2>
                <p className="mb-12 text-center text-gray-600">
                    Pertanyaan yang sering ditanyakan
                </p>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <footer className="min-h-screen bg-gray-900 py-16 text-white">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Column 1 */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold">Panduan</h3>
                        <p className="text-sm leading-loose text-gray-400">
                            Kami menyediakan informasi layanan website, proses
                            pengerjaan dan informasi biaya pembuatan website
                            secara lengkap.
                        </p>
                        <Link
                            href="#"
                            className="mt-2 inline-block text-sm text-blue-400 hover:underline"
                        >
                            Pelajari lebih lanjut
                        </Link>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold">
                            Pelayanan Kami
                        </h3>
                        <p className="text-sm leading-loose text-gray-400">
                            Memberikan layanan pengembangan website berkualitas
                            dengan tim profesional yang telah berpengalaman
                            dalam pengerjaan website.
                        </p>
                        <Link
                            href="#"
                            className="mt-2 inline-block text-sm text-blue-400 hover:underline"
                        >
                            Pelajari lebih lanjut
                        </Link>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold">Bantuan</h3>
                        <p className="text-sm leading-loose text-gray-400">
                            Silahkan kontak support kami untuk mendapatkan
                            jawaban terkait layanan kami melalui chat WhatsApp.
                        </p>
                        <Link
                            href="#"
                            className="mt-2 inline-block text-sm text-blue-400 hover:underline"
                        >
                            Hubungi kami
                        </Link>
                    </div>
                </div>

                {/* Company Info */}
                <div className="border-t border-gray-800 pt-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Company Details */}
                        <div>
                            <h4 className="mb-4 font-semibold">
                                PT Dan Teknologi Indonesia
                            </h4>
                            <p className="mb-2 text-sm text-gray-400">
                                WA: +6281234567890
                            </p>
                            <p className="mb-2 text-sm text-gray-400">
                                Email: info@example.com
                            </p>
                            <p className="text-sm text-gray-400">
                                PID Number: 123456789
                            </p>
                        </div>

                        {/* Payment Methods & Social Links */}
                        <div>
                            <div className="mb-8">
                                <h4 className="mb-4 font-semibold">
                                    METODE PEMBAYARAN
                                </h4>
                                <div className="flex gap-4">
                                    <img
                                        src="/api/placeholder/40/25"
                                        alt="BCA"
                                        className="h-6"
                                    />
                                    <img
                                        src="/api/placeholder/40/25"
                                        alt="Mandiri"
                                        className="h-6"
                                    />
                                    <img
                                        src="/api/placeholder/40/25"
                                        alt="BNI"
                                        className="h-6"
                                    />
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
