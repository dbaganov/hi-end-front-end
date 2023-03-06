import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginModalSchema } from 'features/AuthByUsername/model/types/loginModalSchema';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginModal: LoginModalSchema;
}
