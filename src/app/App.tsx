import { classNames } from 'shared/lib/classNames/classNames';
import Layout from 'widgets/Layout/ui/Layout';
import { AppRouter } from 'app/providers/RouteProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Header } from 'widgets/Header';
import { Content } from 'widgets/Content';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
    const classes = classNames('app', {}, []);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
