import { createBrowserRouter } from "react-router-dom";
import { Home, Products,Detail, AdminDashboard, AdminProducts } from "./page";

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
        path : "/admin/dashboard/products",
        element : <AdminProducts/>
    }
])

export default router;