import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const LogoutButton = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userActions.logout());
    };

    return <Button onClick={handleLogout}>{t('Logout')}</Button>;
};

export default LogoutButton;
