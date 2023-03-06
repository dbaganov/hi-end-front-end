import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { LoginButton, loginModalActions } from 'features/AuthByUsername';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

function Header(props: HeaderProps) {
    const { t } = useTranslation();
    const { className } = props;
    const classes = classNames(styles.header, {}, [className]);

    return (
        <header className={classes}>
            <h1>{t('title')}</h1>
            <div className={styles.controls}>
                <LoginButton />
                <span>|</span>
                <LangSwitcher />
            </div>
        </header>
    );
}

export default Header;
