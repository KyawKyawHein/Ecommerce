import { createBrowserRouter } from "react-router-dom";
import { Home, Products,Detail } from "./page";

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
    }
])

export default router;