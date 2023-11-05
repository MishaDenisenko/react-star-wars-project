import cn from "classnames";
import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";

import routesConfig from "../../routes/routesConfig";

import Header from "../../components/Header";

import styles from './App.module.css';

const App = () => {
    return (
        <BrowserRouter>
            {/*<div className={styles.wrapper}>*/}
                <Header/>

                <Routes>
                    {routesConfig.map(({path, element}, index) => (
                            <Route key={index} path={path} element={element}/>
                        ))}
                </Routes>
            {/*</div>*/}
        </BrowserRouter>
    );
};

export default App;

