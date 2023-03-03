import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue', () => {
    it('should return the counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 100
            }
        };

        expect(getCounterValue(state as StateSchema)).toEqual(
            state.counter.value
        );
    });
});
