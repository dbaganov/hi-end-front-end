import { createContext } from 'react';

export enum Layout {
    Collapsed = 'collapsed',
    NotCollapsed = 'not-collapsed'
}

export interface LayoutContextProps {
    layout: Layout;
    setLayout: (layout: Layout) => void;
}

export const LayoutContext = createContext<LayoutContextProps>({
    layout: Layout.NotCollapsed,
    setLayout: () => {}
});

export const LOCAL_STORAGE_LAYOUT_KEY = 'layout';
