import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";

const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.entries(routeConfig).map(([key, value]) => (
                <Route key={key} {...value}/>
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
