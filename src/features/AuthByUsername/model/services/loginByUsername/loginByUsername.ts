import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { setLocalStorageItem } from 'shared/lib/localStorage/localStorage';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernamePayload {
    username: string;
    password: string;
}

const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernamePayload,
    { rejectValue: string }
>(
    'login/loginByUsername',
    async ({ username, password }, { dispatch, rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/auth/login',
                {
                    username,
                    password
                }
            );
            const { data } = response;

            setLocalStorageItem(USER_LOCAL_STORAGE_KEY, data);
            dispatch(userActions.setAuthData(data));

            return data;
        } catch (error) {
            return rejectWithValue(i18n.t('login.error'));
        }
    }
);

export default loginByUsername;
