import React from 'react';
import { classNames } from 'shared/lib/classNames';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

function Sidebar(props: SidebarProps) {
    const { className } = props;

    const classes = classNames(styles.aside, {}, [className]);

    return <aside className={classes}>Sidebar</aside>;
}

export default Sidebar;
