import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername', () => {
    it('should return the login username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test'
            }
        };

        expect(getUsername(state as StateSchema)).toEqual(
            state.loginForm.username
        );
    });
});
