import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
    children?: React.ReactNode;
}

function Header(props: HeaderProps) {
    const { className, children } = props;
    const classes = classNames(styles.header, {}, [className]);

    return (
        <header className={classes}>
            {children}
            <ThemeSwitcher />
            <LangSwitcher />
        </header>
    );
}

export default Header;
