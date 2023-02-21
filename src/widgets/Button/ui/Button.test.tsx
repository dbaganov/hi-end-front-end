import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from './Button';

describe('Button', () => {
    it('renders correctly', () => {
        const text = 'Button';
        render(<Button>{text}</Button>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('renders correctly with theme', () => {
        const text = 'Button';
        render(<Button theme={ThemeButton.CLEAR}>{text}</Button>);
        expect(screen.getByText(text)).toHaveClass('clear');
    });
});
