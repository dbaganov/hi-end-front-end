import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

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
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:8000/auth/login',
                {
                    username,
                    password
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue('Invalid username or password');
        }
    }
);

export default loginByUsername;
