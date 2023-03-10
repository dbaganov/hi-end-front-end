import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getIsLoading } from './getIsLoading';

describe('getUsername', () => {
    it('should return the login username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test',
                isLoading: true
            }
        };

        expect(getIsLoading(state as StateSchema)).toEqual(true);
    });
});
