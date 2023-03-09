import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';

describe('getUserAuthData', () => {
    it("should return user's auth data", () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'test'
                }
            }
        };

        expect(getUserAuthData(state as StateSchema)).toEqual(
            state.user.authData
        );
    });
});
