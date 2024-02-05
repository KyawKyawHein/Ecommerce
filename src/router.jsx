import { createBrowserRouter } from "react-router-dom";
import { Home, Products } from "./page";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home/>,
    },
    {
        path : "/products",
        element  :<Products/>
    }
])

export default router;