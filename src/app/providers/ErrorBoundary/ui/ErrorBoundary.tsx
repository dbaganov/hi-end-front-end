import React, { ErrorInfo } from 'react';

interface IErrorBoundaryProps {
    fallback: React.ReactNode;
    children: React.ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        console.log('error', error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('error', error);
        console.log('info', info);
    }

    render() {
        const { hasError } = this.state;
        const { fallback, children } = this.props;

        if (hasError) {
            return <> {fallback} </>;
        }

        return <> {children} </>;
    }
}

export default ErrorBoundary;
