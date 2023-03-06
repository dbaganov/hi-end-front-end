import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {
    const {
        id,
        className,
        label,
        value,
        type = 'text',
        autoFocus,
        onChange,
        ...otherProps
    } = props;
    const classes = classNames(styles.Input, {}, [className]);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    return (
        <div className={classes}>
            {label && (
                <label className={styles.Input__label} htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                id={id}
                className={styles.Input__input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
};

export default memo(Input);
