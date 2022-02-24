import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { ClientesPage } from "../pages/ClientesPage";
import { Error404Page } from "../pages/Error404Page";
export const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/clientes" element={<ClientesPage />} />
                <Route path="/*" element={<Error404Page />} />
            </Routes>
        </HashRouter>
    );
};
