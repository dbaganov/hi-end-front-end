import { createStore } from 'app/providers/StoreProvider/config/store';
import StoreProvider from './ui/StoreProvider';
import type {
    StateSchema,
    StoreWithReducerManager
} from './config/StateSchema';

export { StoreProvider, createStore, StateSchema, StoreWithReducerManager };
