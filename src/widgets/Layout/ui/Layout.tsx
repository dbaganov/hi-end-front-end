import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Layout.module.scss';

interface LayoutProps {
    className?: string;
    children: React.ReactNode;
}

function Layout(props: LayoutProps) {
    const { className, children } = props;
    const classes = classNames(styles.main, {}, [className]);

    return <main className={classes}>{children}</main>;
}

export default Layout;
