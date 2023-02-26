import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

function Sidebar(props: SidebarProps) {
    const { className } = props;
    const { t } = useTranslation();
    const [collapsed, setCollapsed] = React.useState(false);

    const classes = classNames(
        styles.aside,
        { [styles.collapsed]: collapsed },
        [className]
    );

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <aside data-testid="sidebar" className={classes}>
            <h2>{t('Sidebar')}</h2>
            <Button data-testid="sidebar-toggle" onClick={onToggle}>
                {t('Toggle')}
            </Button>
        </aside>
    );
}

export default Sidebar;
