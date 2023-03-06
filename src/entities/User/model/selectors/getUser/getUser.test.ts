import { getUser } from 'entities/User/model/selectors/getUser/getUser';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getUser', () => {
    it('should return the counter', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'test'
                }
            }
        };

        expect(getUser(state as StateSchema)).toEqual(state.user);
    });
});
