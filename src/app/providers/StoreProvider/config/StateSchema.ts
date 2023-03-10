import { UserSchema } from 'entities/User';
import { LoginModalSchema, LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    user: UserSchema;
    loginModal?: LoginModalSchema;
    loginForm?: LoginSchema;
}
