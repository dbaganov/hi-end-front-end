import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <div className="links">
                <button onClick={toggleTheme}>Toggle Theme</button>
                <Link to="/">Main</Link>
                <Link to="about">About</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="about" element={<AboutPageAsync/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
