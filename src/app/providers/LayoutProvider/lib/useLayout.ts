import { useContext } from 'react';
import {
    LOCAL_STORAGE_LAYOUT_KEY,
    Layout,
    LayoutContext
} from './LayoutContext';

interface UseLayout {
    layout: Layout;
    toggleLayout: () => void;
    setNewLayout: (layout: Layout) => void;
}

function useLayout(): UseLayout {
    const { layout, setLayout } = useContext(LayoutContext);

    const saveLayout = (layout: Layout) => {
        localStorage.setItem(LOCAL_STORAGE_LAYOUT_KEY, layout);
    };

    const setNewLayout = (layout: Layout) => {
        setLayout(layout);
        saveLayout(layout);
    };

    const toggleLayout = () => {
        const newLayout =
            layout === Layout.Collapsed
                ? Layout.NotCollapsed
                : Layout.Collapsed;
        setNewLayout(newLayout);
    };

    return {
        layout,
        toggleLayout,
        setNewLayout
    };
}

export default useLayout;
