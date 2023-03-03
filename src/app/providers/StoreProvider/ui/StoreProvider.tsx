import { Provider } from 'react-redux';
import React from 'react';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { createStore } from '../config/store';

interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    const store = createStore(initialState as StateSchema);

    // @ts-ignore
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
