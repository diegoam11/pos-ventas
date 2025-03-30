import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeSells } from "./pages/home/HomeSells";
import { RouterLayout } from "./common/RouterLayout";
import { ProductsView } from "./pages/products/ProductsView";
import { DashboardView } from "./pages/dashboard/DashboardView";
import { SellsView } from "./pages/sells/SellsView";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route index element={<Navigate to="/inicio" replace />} />
                <Route path="/inicio" element={<HomeSells />} />
                <Route path="/productos" element={<ProductsView />} />
                <Route path="/dashboard" element={<DashboardView />} />
                <Route path="/mis-ventas" element={<SellsView />} />
            </Route>
        </Routes>
    );
};
