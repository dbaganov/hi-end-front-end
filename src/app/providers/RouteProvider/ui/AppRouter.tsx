import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { Loader } from 'shared/ui/Loader';

function AppRouter() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.entries(routeConfig).map(([key, value]) => (
                    <Route key={key} {...value} />
                ))}
            </Routes>
        </Suspense>
    );
}

export default AppRouter;
