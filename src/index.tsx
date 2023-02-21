import { Suspense } from 'react';
import { render } from 'react-dom';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import PageError from 'widgets/PageError/PageError';
import App from './app/App';

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<PageError />}>
            <ThemeProvider>
                <Suspense fallback="">
                    <App />
                </Suspense>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('app')
);
