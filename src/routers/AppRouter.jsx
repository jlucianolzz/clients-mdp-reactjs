import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ClientesPage } from "../pages/ClientesPage";
import { Error404Page } from "../pages/Error404Page";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClientesPage />} />
                <Route path="/*" element={<Error404Page />} />
            </Routes>
        </BrowserRouter>
    );
};
