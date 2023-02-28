import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_LAYOUT_KEY,
    Layout,
    LayoutContext
} from '../lib/LayoutContext';

const defaultLayout =
    (localStorage.getItem(LOCAL_STORAGE_LAYOUT_KEY) as Layout) ||
    Layout.NotCollapsed;

const LayoutProvider: FC = ({ children }) => {
    const [layout, setLayout] = useState<Layout>(defaultLayout);

    const defaultProps = useMemo(
        () => ({
            layout,
            setLayout
        }),
        [layout]
    );

    return (
        <LayoutContext.Provider value={defaultProps}>
            {children}
        </LayoutContext.Provider>
    );
};

export default LayoutProvider;
