import Navbar from '@/Components/Navbar';
import QuizModalCard from '@/Components/QuizModalCard';
import { useQuestionContext } from '@/context/QuestionContext';
import { Quiz, Quizzes } from '@/types/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import data from '../../data/data.json';

function QuizPage() {
    const quizzes: Quizzes = data.quizzes;

    return (
        <div className="bg-gray-200">
            <Head title="Home" />

            <Navbar />
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
    const { user } = usePage().props?.auth;

    const handleSelectedQuiz = (quiz: Quiz) => {
        setQuiz(quiz);
    };

    return (
        <main className="mx-auto flex-col px-6 py-5 pt-40 text-xl sm:px-16 xl:flex xl:w-full xl:items-start xl:px-20">
            <section className="flex w-full justify-evenly gap-5 rounded-lg p-10 shadow-xl">
                <div className="flex-1">
                    <h2 className="flex flex-col text-[40px] leading-tight sm:text-[64px]">
                        <span className="font-extralight">Welcome to the</span>
                        <span className="font-medium">Frontend Quiz!</span>
                    </h2>
                    <h3 className="text-greyNavy dark:text-lightBluish text-[14px] font-light italic leading-normal sm:text-xl">
                        Pick a subject to get started.
                    </h3>
                </div>
                <div className="flex flex-1 items-center justify-center rounded-xl bg-violet-700 bg-gradient-to-br">
                    <h1 className="text-2xl text-white">
                        Hello {user ? user.name : 'Student'}
                    </h1>
                    <img src="" alt="robot" />
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
                <QuizModalCard
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    quiz={quiz}
                />
            )}
        </main>
    );
};
