import Navbar from '@/Components/Navbar';
import { useQuestionContext } from '@/context/QuestionContext';
import { Quiz, Quizzes } from '@/types/types';
import { Head, usePage } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import data from '../../data/data.json';
function QuizPage() {
    const quizzes: Quizzes = data.quizzes;
    const [quizData, setQuizData] = useState<Quiz>({
        title: '',
        icon: '',
        iconbg: '',
        questions: []
    });

    return (
        <div className="bg-gray-200">
            <Head title="Home" />

            <Navbar
                title={quizData.title}
                icon={quizData.icon}
                iconbg={quizData.iconbg}
            />
            <Home quizzes={quizzes} />
        </div>
    );
}

export default QuizPage;

type HomeProps = {
    quizzes: Quiz[];
};

const Home = ({ quizzes }: HomeProps) => {
    const { quiz, setQuiz } = useQuestionContext();
    const [modalActive, setModalActive] = useState(false);
    const handleSelectedQuiz = (quiz: Quiz) => {
        setQuiz(quiz);
    };

    const user = usePage();

    return (
        <main className="mx-auto flex-col px-6 py-5 pt-40 text-xl sm:px-16 xl:flex xl:w-full xl:items-start xl:px-20">
            <section className="flex w-full justify-evenly gap-5 bg-red-500 p-10">
                <div className="flex-1">
                    <h2 className="flex flex-col text-[40px] leading-tight sm:text-[64px]">
                        <span className="font-extralight">Welcome to the</span>
                        <span className="font-medium">Frontend Quiz!</span>
                    </h2>
                    <h3 className="text-greyNavy dark:text-lightBluish text-[14px] font-light italic leading-normal sm:text-xl">
                        Pick a subject to get started.
                    </h3>
                </div>
                <div className="flex flex-1 items-center justify-center bg-blue-400">
                    {/* <h1>Hello {user.auth.user.name}</h1> */}
                </div>
            </section>
            <section className="mt-10 grid w-full grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                {quizzes.map((quiz) => {
                    return (
                        <div
                            className="transform cursor-pointer rounded-lg bg-white p-4 shadow-lg duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white"
                            key={quiz.title}
                            onClick={() => {
                                handleSelectedQuiz(quiz);
                                setModalActive(true);
                            }}
                        >
                            {/* Content */}
                            <div className="relative">
                                {/* Light Bulb Icon */}
                                <div className="mb-6 flex justify-center">
                                    <div className="h-16 w-16">
                                        <img
                                            src={quiz.icon}
                                            alt=""
                                            width={80}
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="mb-2 text-xl font-semibold">
                                    {quiz.title}
                                </h2>
                            </div>
                        </div>
                    );
                })}
            </section>
            {quiz && (
                <QuizCard
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    quiz={quiz}
                />
            )}
        </main>
    );
};

import { useForm } from '@inertiajs/react';

const QuizCard = ({ modalActive, setModalActive, quiz }) => {
    if (!quiz.title) return null;

    const { data, setData, post, processing, transform } = useForm({
        title: '',
        level: ''
    });

    const [readyToSubmit, setReadyToSubmit] = useState(false);

    useEffect(() => {
        if (readyToSubmit && data.level) {
            post(route('quiz.study'), {
                onSuccess: () => console.log('Request sent successfully'),
                onError: (errors) => console.error('Request error:', errors)
            });
            setReadyToSubmit(false); // Reset state
        }
    }, [readyToSubmit, data.level]); // Efek akan jalan saat readyToSubmit berubah

    const submit = (difficulty: string) => {
        setData('title', quiz.title);
        setData('level', difficulty);
        setReadyToSubmit(true); // Trigger useEffect setelah setData
    };

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 top-0 backdrop-blur-md ${modalActive ? 'inline-block' : 'hidden'}`}
        >
            <div className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white p-4 shadow-lg">
                {/* Close Button */}
                <div className="mb-4 flex justify-end space-x-2">
                    <button
                        className="rounded-lg bg-gray-700 bg-opacity-80 p-1 text-white hover:bg-red-600"
                        onClick={() => setModalActive(false)}
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Quiz Icon */}
                <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16">
                        <img src={quiz.icon} alt="" width={80} />
                    </div>
                </div>

                {/* Quiz Title */}
                <h2 className="mb-2 text-xl font-semibold">{quiz.title}</h2>

                {/* Difficulty Selection */}
                <div className="mb-4 text-sm text-gray-600">
                    Pilih Tingkat Kesulitan:
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                    <button
                        onClick={() => submit('1')}
                        className="flex flex-1 items-center justify-center rounded-lg bg-emerald-400 px-4 py-2 text-white hover:bg-emerald-500"
                        disabled={processing}
                    >
                        Mudah
                    </button>
                    <button
                        onClick={() => submit('2')}
                        className="flex flex-1 items-center justify-center rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-purple-600"
                        disabled={processing}
                    >
                        Normal
                    </button>
                    <button
                        onClick={() => submit('3')}
                        className="flex flex-1 items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-purple-600"
                        disabled={processing}
                    >
                        Sulit
                    </button>
                </div>
            </div>
        </div>
    );
};
