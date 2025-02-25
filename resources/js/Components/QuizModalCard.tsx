import { Link } from '@inertiajs/react';
import { X } from 'lucide-react';

const QuizModalCard = ({ modalActive, setModalActive, quiz }) => {
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
                    <Link
                        href={`/quiz-test/${quiz.title}`}
                        className="flex flex-1 items-center justify-center rounded-lg bg-emerald-400 px-4 py-2 text-white hover:bg-emerald-500"
                    >
                        Mudah
                    </Link>
                    <Link
                        href={`/quiz-test/${quiz.title}`}
                        className="flex flex-1 items-center justify-center rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-purple-600"
                    >
                        Normal
                    </Link>
                    <Link
                        href={`/quiz-test/${quiz.title}`}
                        className="flex flex-1 items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-purple-600"
                    >
                        Sulit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizModalCard;
