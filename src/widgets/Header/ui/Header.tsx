import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { LoginButton, LogoutButton } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, Username } from 'entities/User';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

function Header(props: HeaderProps) {
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const { className } = props;
    const classes = classNames(styles.header, {}, [className]);

    return (
        <header className={classes}>
            <h1>{t('title')}</h1>
            <div className={styles.controls}>
                {authData ? (
                    <>
                        <Username />
                        <LogoutButton />
                    </>
                ) : (
                    <LoginButton />
                )}
                <span>|</span>
                <LangSwitcher />
            </div>
        </header>
    );
}

export default Header;
