import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

function Navbar(props: NavbarProps) {
    const { className } = props;
    const classes = classNames(styles.nav, {}, [className]);

    return (
        <nav className={classes}>
            <Link to="/">Main</Link>
            <Link to="about">About</Link>
        </nav>
    );
}

export default Navbar;
