import { useTranslation } from 'react-i18next';
import LoginModal from 'features/AuthByUsername/ui/LoginModal/LoginModal';

function MainPage() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Main Page')}</h1>
        </div>
    );
}

export default MainPage;
