import { Suspense } from 'react';
import { render } from 'react-dom';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';
import { LayoutProvider } from 'app/providers/LayoutProvider';
import App from './app/App';

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<PageError />}>
            <ThemeProvider>
                <LayoutProvider>
                    <Suspense fallback="">
                        <App />
                    </Suspense>
                </LayoutProvider>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('app')
);
