import { classNames } from 'shared/lib/classNames/classNames';
import Layout from 'widgets/Layout/ui/Layout';
import { AppRouter } from 'app/providers/RouteProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';
import { Content } from 'widgets/Content';

function App() {
    const classes = classNames('app', {}, []);

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
