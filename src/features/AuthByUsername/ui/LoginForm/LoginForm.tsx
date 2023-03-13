import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { Button } from 'widgets/Button';
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useCallback, useEffect } from 'react';
import { TextTheme, Text } from 'shared/ui/Text';
import { useInjectReducer } from 'shared/hooks/useInjectReducer';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';
import {
    loginActions,
    loginReducer
} from '../../model/slices/loginSlice/loginSlice';
import styles from './LoginForm.module.scss';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getError } from '../../model/selectors/getError/getError';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = (props: LoginFormProps) => {
    useInjectReducer('loginForm', loginReducer);

    const dispatch = useDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const { t } = useTranslation();
    const { className } = props;
    const classes = classNames(styles.LoginForm, {}, [className]);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    const onSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            dispatch(loginByUsername({ username, password }));
        },
        [dispatch, username, password]
    );

    useEffect(
        () => () => {
            dispatch(loginActions.reset());
        },
        [dispatch]
    );

    return (
        <form className={classes} onSubmit={onSubmit}>
            <Text
                className={styles.LoginForm__title}
                title={t('login.title')}
            />
            <Input
                id="username"
                label={t('login.username')}
                autoFocus
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                id="password"
                label={t('login.password')}
                value={password}
                type="password"
                onChange={onChangePassword}
            />
            {error && (
                <Text
                    className={styles.LoginForm__error}
                    text={error}
                    theme={TextTheme.Error}
                />
            )}
            <div className={styles.LoginForm__formGroup}>
                <Button
                    className={styles.LoginForm__button}
                    type="submit"
                    disabled={isLoading}
                >
                    {t('login.submit')}
                </Button>
            </div>
        </form>
    );
};

export default memo(LoginForm);
