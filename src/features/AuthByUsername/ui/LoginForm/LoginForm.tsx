import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = (props: LoginFormProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const classes = classNames(styles.LoginForm, {}, [className]);

    return (
        <form className={classes}>
            <Input id="username" label={t('Username')} autoFocus />
            <Input id="password" label={t('Password')} />
            <div className={styles.LoginForm__formGroup}>
                <Button className={styles.LoginForm__button} type="submit">
                    {t('Login')}
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
