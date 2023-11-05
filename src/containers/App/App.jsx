import cn from "classnames";
import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";

import Header from "../../components/Header";

import styles from './App.module.css';
import routesConfig from "../../routes/routesConfig";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                {routesConfig.map(({path, element}, index) => (
                        <Route key={index} path={path} element={element}/>
                    ))}
            </Routes>
        </BrowserRouter>
    );
};

export default App;

