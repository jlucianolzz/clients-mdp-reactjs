import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { ClientesPage } from "../pages/ClientesPage";
import { Error404Page } from "../pages/Error404Page";
const home = process.env.REACT_APP_HOME_URL;
export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={`${home}/clientes`} element={<ClientesPage />} />
                <Route path={`${home}/*`} element={<Error404Page />} />
            </Routes>
        </HashRouter>
    );
};
