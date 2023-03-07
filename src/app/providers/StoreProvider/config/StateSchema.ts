import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginModalSchema, LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginModal?: LoginModalSchema;
    loginForm?: LoginSchema;
}
