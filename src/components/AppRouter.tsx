import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import { publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const isAuth = true
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}/>
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} replace={true}/>}/>
        </Routes>
    );
};

export default AppRouter;
