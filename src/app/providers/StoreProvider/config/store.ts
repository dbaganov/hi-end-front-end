import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginModalReducer, loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function createStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginModal: loginModalReducer,
        loginForm: loginReducer
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });
}
