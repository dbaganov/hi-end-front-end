import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import AppLink from './AppLink';

describe('AppLink', () => {
    it('renders correctly', () => {
        const text = 'AppLink';
        componentRender(<AppLink to="/">{text}</AppLink>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});
