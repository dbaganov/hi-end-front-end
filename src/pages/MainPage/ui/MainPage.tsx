import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Main Page')}</h1>
        </div>
    );
}

export default MainPage;
