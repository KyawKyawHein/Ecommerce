import { createBrowserRouter } from "react-router-dom";
import { Home, Products,Detail, AdminDashboard, AdminProducts, AdminProductForm, AdminCategories, AdminCategoryForm, AdminBanners, AdminBannerForm } from "./page";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>,
    },
    {
        path : "/products",
        element  :<Products/>
    },
    {
        path : "/detail",
        element : <Detail/>
    },
    {
        path : "/admin/dashboard",
        element : <AdminDashboard/>
    },
    {
        path : "/admin/dashboard/product",
        element : <AdminProducts/>
    },
    {
        path : "/admin/dashboard/product/add",
        element : <AdminProductForm/>
    },
    {
        path : "/admin/dashboard/product/:slug",
        element : <AdminProductForm/>
    },
    {
        path : "/admin/dashboard/category",
        element: <AdminCategories/>
    },
    {
        path: "/admin/dashboard/category/add",
        element : <AdminCategoryForm/>
    },
    {
        path: "/admin/dashboard/category/:slug",
        element : <AdminCategoryForm/>
    },
    {
        path : "/admin/dashboard/banner",
        element: <AdminBanners/>
    },
    {
        path: "/admin/dashboard/banner/add",
        element : <AdminBannerForm/>
    },
    {
        path: "/admin/dashboard/banner/:slug",
        element : <AdminBannerForm/>
    }
])

export default router;