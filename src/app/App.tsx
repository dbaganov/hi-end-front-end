import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import Layout from 'widgets/Layout/ui/Layout';
import { AppRouter } from 'app/providers/RouteProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';
import { Content } from 'widgets/Content';

function App() {
    const { theme } = useTheme();
    const classes = classNames('app', {}, [theme]);

    return (
        <Layout className={classes}>
            <Header />
            <Sidebar />
            <Content>
                <AppRouter />
            </Content>
        </Layout>
    );
}

export default App;
