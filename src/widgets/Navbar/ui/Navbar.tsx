import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

function Navbar(props: NavbarProps) {
    const { className } = props;
    const { t } = useTranslation();
    const classes = classNames(styles.nav, {}, [className]);

    return (
        <nav className={classes}>
            <Link to="/">{t('Main')}</Link>
            <Link to="about">{t('About')}</Link>
        </nav>
    );
}

export default Navbar;
