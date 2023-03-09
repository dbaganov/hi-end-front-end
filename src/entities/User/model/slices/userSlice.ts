import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorageItem } from 'shared/lib/localStorage/localStorage';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { UserSchema } from '../types/userSchema';
import { User } from '../types/User';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initAuthData: state => {
            const authData = getLocalStorageItem<User>(USER_LOCAL_STORAGE_KEY);
            if (authData) {
                state.authData = authData;
            }
        },
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        }
    }
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
