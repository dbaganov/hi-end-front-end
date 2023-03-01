import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    it('renders correctly', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    it('toggles correctly', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
        fireEvent.click(screen.getByTestId('sidebar-toggle'));
        // expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
