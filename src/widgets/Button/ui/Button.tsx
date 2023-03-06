import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ThemeButton;
    className?: string;
    children?: React.ReactNode;
}

function Button(props: ButtonProps) {
    const { theme = ThemeButton.PRIMARY, className, children, ...rest } = props;
    const classes = classNames(styles.button, {}, [className, styles[theme]]);

    return (
        <button type="button" className={classes} {...rest}>
            {children}
        </button>
    );
}

export default Button;
