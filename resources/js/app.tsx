import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import QuestionContextProvider from './context/QuestionContext';
import ThemeContextProvider from './context/ThemeContext';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <QuestionContextProvider>
                <ThemeContextProvider>
                    <App {...props} />
                </ThemeContextProvider>
            </QuestionContextProvider>
        );
    },
    progress: {
        color: '#4B5563'
    }
});
