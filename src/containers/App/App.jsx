import cn from "classnames";
import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";

import routesConfig from "../../routes/routesConfig";

import Header from "../../components/Header";

import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.wrapper}>
            <BrowserRouter>
                <Header/>

                <Routes>
                    {routesConfig.map(({routePath, element}, index) => (
                        <Route key={index} path={routePath} element={element}/>
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;

