import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('renders correctly', () => {
        const text = 'Sidebar';
        renderWithTranslation(<Sidebar />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('toggles correctly', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('sidebar-toggle'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
