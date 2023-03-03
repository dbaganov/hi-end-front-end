import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    it('should return the counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 100
            }
        };

        expect(getCounter(state as StateSchema)).toEqual(state.counter);
    });
});
