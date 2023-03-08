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
    disabled?: boolean;
}

function Button(props: ButtonProps) {
    const {
        theme = ThemeButton.PRIMARY,
        className,
        disabled,
        children,
        ...rest
    } = props;
    const classes = classNames(styles.button, { [styles.disabled]: disabled }, [
        className,
        styles[theme]
    ]);

    return (
        <button type="button" className={classes} disabled={disabled} {...rest}>
            {children}
        </button>
    );
}

export default Button;
