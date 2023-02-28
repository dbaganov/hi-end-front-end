import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useLayout } from 'app/providers/LayoutProvider';
import styles from './Layout.module.scss';

interface LayoutProps {
    className?: string;
    children: React.ReactNode;
}

function Layout(props: LayoutProps) {
    const { className, children } = props;
    const { layout } = useLayout();
    const classes = classNames(styles.main, {}, [className, styles[layout]]);

    return <main className={classes}>{children}</main>;
}

export default Layout;
