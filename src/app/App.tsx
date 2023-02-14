import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import Layout from 'widgets/Layout/ui/Layout';
import { AppRouter } from 'app/providers/RouteProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';
import { Navbar } from 'widgets/Navbar';
import { Content } from 'widgets/Content';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const classes = classNames('app', {}, [theme]);

    return (
        <Layout className={classes}>
            <Header>
                <h1>{t('title')}</h1>
                <Navbar />
            </Header>
            <Sidebar />
            <Content>
                <AppRouter />
            </Content>
        </Layout>
    );
}

export default App;
