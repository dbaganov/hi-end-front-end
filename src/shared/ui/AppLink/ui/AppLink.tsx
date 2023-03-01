import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import React from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    icon?: React.ReactNode;
}

function AppLink(props: AppLinkProps) {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        icon,
        ...otherProps
    } = props;
    const classes = classNames(
        cls.AppLink,
        {
            [cls['AppLink--with-icon']]: !!icon
        },
        [className, cls[theme]]
    );

    return (
        <Link to={to} className={classes} {...otherProps}>
            {icon}
            {children}
        </Link>
    );
}

export default AppLink;
