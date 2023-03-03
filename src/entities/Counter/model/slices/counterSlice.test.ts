import {
    counterActions,
    counterReducer
} from 'entities/Counter/model/slices/counterSlice';
import { CounterSchema } from 'entities/Counter';

describe('counterSlice', () => {
    it('should increment the counter', () => {
        const state: CounterSchema = {
            value: 0
        };

        const result = counterReducer(state, counterActions.increment());
        expect(result.value).toEqual(1);
    });

    it('should decrement the counter', () => {
        const state: CounterSchema = {
            value: 0
        };

        const result = counterReducer(state, counterActions.decrement());
        expect(result.value).toEqual(-1);
    });

    it('should work with empty state', () => {
        const result = counterReducer(undefined, counterActions.increment());
        expect(result.value).toEqual(1);
    });

    it('should work with empty state', () => {
        const result = counterReducer(undefined, counterActions.decrement());
        expect(result.value).toEqual(-1);
    });
});
