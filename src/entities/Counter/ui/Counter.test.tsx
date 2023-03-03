import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    it('should render', () => {
        const { getByText } = componentRender(<Counter />);
        expect(getByText('Counter: 0')).toBeInTheDocument();
    });

    it('should increment', () => {
        const { getByText } = componentRender(<Counter />);
        const counter = getByText('Counter: 0');
        const incrementButton = getByText('Increment');
        userEvent.click(incrementButton);
        expect(counter).toHaveTextContent('Counter: 1');
    });

    it('should decrement', () => {
        const { getByText } = componentRender(<Counter />);
        const counter = getByText('Counter: 0');
        const decrementButton = getByText('Decrement');
        userEvent.click(decrementButton);
        expect(counter).toHaveTextContent('Counter: -1');
    });
});
