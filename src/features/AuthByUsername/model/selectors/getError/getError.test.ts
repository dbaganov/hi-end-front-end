import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getError } from './getError';

describe('getUsername', () => {
    it('should return the login username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test',
                error: 'test'
            }
        };

        expect(getError(state as StateSchema)).toEqual('test');
    });
});
