import { loginModalActions, loginModalReducer } from 'features/AuthByUsername';
import { LoginModalSchema } from 'features/AuthByUsername/model/types/loginModalSchema';

describe('loginModalSlice', () => {
    it('should close the login modal', () => {
        const state: LoginModalSchema = {
            isLoginModalOpened: true
        };

        const result = loginModalReducer(
            state,
            loginModalActions.closeLoginModal()
        );
        expect(result.isLoginModalOpened).toEqual(false);
    });

    it('should open the login modal', () => {
        const state: LoginModalSchema = {
            isLoginModalOpened: false
        };

        const result = loginModalReducer(
            state,
            loginModalActions.openLoginModal()
        );
        expect(result.isLoginModalOpened).toEqual(true);
    });
});
