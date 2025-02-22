import { Quiz } from '@/types/types';
import { createContext, useContext, useState } from 'react';

type QuestionContextType = {
    quiz: Quiz;
    setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
};

const QuestionContext = createContext<QuestionContextType | null>(null);
export default function QuestionContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [quiz, setQuiz] = useState<Quiz>({
        title: '',
        icon: '',
        iconbg: '',
        questions: [],
    });
    return (
        <QuestionContext.Provider value={{ quiz, setQuiz }}>
            {children}
        </QuestionContext.Provider>
    );
}

export const useQuestionContext = () => {
    const context = useContext(QuestionContext);
    if (context === undefined) {
        throw new Error('context not found');
    }
    return context;
};
