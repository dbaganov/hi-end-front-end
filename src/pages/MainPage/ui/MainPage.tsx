import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

function MainPage() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Main Page')}</h1>
            <Counter />
        </div>
    );
}

export default MainPage;
