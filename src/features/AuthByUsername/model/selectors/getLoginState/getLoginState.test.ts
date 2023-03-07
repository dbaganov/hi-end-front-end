import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginModal } from 'features/AuthByUsername/model/selectors/getLoginModalState/getLoginModal';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getUsername', () => {
    it('should return the login use', () => {
        const state: DeepPartial<StateSchema> = {
            loginModal: {
                isLoginModalOpened: false
            }
        };

        expect(getLoginModal(state as StateSchema)).toEqual(state.loginModal);
    });
});
