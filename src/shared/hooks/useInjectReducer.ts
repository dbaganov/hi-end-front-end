import { StoreWithReducerManager } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { StateSchemaKeys } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export function useInjectReducer(key: StateSchemaKeys, reducer: Reducer): void {
    const store = useStore() as StoreWithReducerManager;

    useEffect(() => {
        store.reducerManager.add(key, reducer);
        store.dispatch({ type: `@INIT REDUCER_INJECTED: ${key}` });

        return () => {
            store.reducerManager.remove(key);
            store.dispatch({ type: `@DESTROY REDUCER_REMOVED: ${key}` });
        };
    }, [key, reducer, store]);
}
