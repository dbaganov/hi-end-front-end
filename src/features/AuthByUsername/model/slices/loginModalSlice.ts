import { createSlice } from '@reduxjs/toolkit';
import { LoginModalSchema } from '../types/loginModalSchema';

const initialState: LoginModalSchema = {
    isLoginModalOpened: false
};

export const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState,
    reducers: {
        openLoginModal: state => {
            state.isLoginModalOpened = true;
        },
        closeLoginModal: state => {
            state.isLoginModalOpened = false;
        }
    }
});

export const { actions: loginModalActions } = loginModalSlice;
export const { reducer: loginModalReducer } = loginModalSlice;
