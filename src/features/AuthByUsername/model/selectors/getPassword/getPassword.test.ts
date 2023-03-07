import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getUsername', () => {
    it('should return the login password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'test'
            }
        };

        expect(getPassword(state as StateSchema)).toEqual(
            state.loginForm.password
        );
    });
});
