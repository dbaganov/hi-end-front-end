import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { LoginModal, loginModalActions } from 'features/AuthByUsername';

const LoginButton = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginModalActions.openLoginModal());
    };

    return (
        <>
            <Button onClick={handleLogin}>{t('Login')}</Button>
            <LoginModal />
        </>
    );
};

export default LoginButton;
