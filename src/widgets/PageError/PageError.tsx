import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const PageError = (props: PageErrorProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const classes = classNames(styles['page-error'], {}, [className]);

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classes}>
            <h1>{t('Page Error')}</h1>
            <Button onClick={reloadPage}>{t('Reload Page')}</Button>
        </div>
    );
};

export default PageError;
